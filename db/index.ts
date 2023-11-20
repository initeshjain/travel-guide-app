import SQLite from 'react-native-sqlite-storage';

class DatabaseService {
  private db: SQLite.SQLiteDatabase | null = null;

  constructor() {
    this.initDatabase();
  }

  private initDatabase() {
    this.db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' }, () => {
      this.createPlacesTable();
    });
  }

  private createPlacesTable() {
    if (!this.db) {
      console.error('Database not initialized.');
      return;
    }

    this.db.transaction((tx: SQLite.Transaction) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, imagePaths TEXT);',
        [],
        (_, resultSet) => {
          console.log('Table created successfully');
        },
        (_, error) => {
          console.error('Error creating table:', error);
        }
      );

      // delete all data
      // tx.executeSql(
      //   'DELETE FROM places;',
      //   [],
      //   (_, resultSet) => {
      //     console.log('Data deleted successfully');
      //   },
      //   (_, error) => {
      //     console.error('Error deleting data:', error);
      //   }
      // )
    });
  }

  public insertPlace(place: Place): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized.'));
        return;
      }

      const imagePathsString = JSON.stringify(place.imagePaths);

      this.db.transaction((tx: SQLite.Transaction) => {
        tx.executeSql(
          'INSERT INTO places (name, description, imagePaths) VALUES (?, ?, ?);',
          [place.name, place.description, imagePathsString],
          (_, resultSet) => {
            console.log('Data inserted successfully');
            resolve();
          },
          (_, error) => {
            console.error('Error inserting data:', error);
            reject(error);
          }
        );
      });
    });
  }

  public getPlaces(): Promise<Place[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized.'));
        return;
      }

      this.db.transaction((tx: SQLite.Transaction) => {
        tx.executeSql(
          'SELECT * FROM places;',
          [],
          (_: any, resultSet: { rows: any; }) => {
            const places: Place[] = [];
            const rows = resultSet.rows;

            for (let i = 0; i < rows.length; i++) {
              const item = rows.item(i);
              const imagePaths = JSON.parse(item.imagePaths) as string[];

              places.push({
                id: item.id,
                name: item.name,
                description: item.description,
                imagePaths: imagePaths,
              });
            }

            resolve(places);
          },
          (_: any, error: any) => {
            console.error('Error fetching data:', error);
            reject(error);
          }
        );
      });
    });
  }
}

export default new DatabaseService();
