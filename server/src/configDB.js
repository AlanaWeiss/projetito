import sqlite3 from "sqlite3";
import { open } from "sqlite";

// you would have to import / invoke this in another file
export async function openDb() {
  return open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

export async function createDatabase() {
  openDb().then((db) => {
    db.serialize(() => {
      db.run(
        "CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER );"
      );
    //   db.exec("CREATE TABLE tipos ( tipo TEXT PRIMARY KEY );");
    //   db.exec(
    //     'INSERT OR IGNORE INTO tipos (tipo) VALUES("administrador"),("aluno"),("professor");'
    //   );
    //   db.exec("CREATE TABLE CREATE TABLE materias (materia TEXT PRIMARY KEY)");
    //   db.exec(`INSERT OR IGNORE INTO materias (materia) VALUES
    //     ('Artes'),
    //     ('Biologia'),
    //     ('Educação Física'),
    //     ('Filosofia'),
    //     ('Física'),
    //     ('Geografia'),
    //     ('História'),
    //     ('Inglês'),
    //     ('Matemática'),
    //     ('Português'),
    //     ('Química'),
    //     ('Sociologia');`);
    // });
    // db.exec(`CREATE TABLE usuarios (
    //     nome TEXT PRIMARY KEY,
    //     senha TEXT NOT NULL,
    //     tipo TEXT NOT NULL,
    //     FOREIGN KEY (tipo) REFERENCES tipos(tipo)
    // );`);
    // db.exec(`INSERT OR IGNORE INTO usuarios (nome, senha, tipo) VALUES
    //   ('admin', 'admin', 'administrador');`);
    // db.exec(`CREATE TABLE conteudos (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     titulo TEXT NOT NULL,
    //     conteudo TEXT NOT NULL,
    //     nome TEXT NOT NULL,
    //     materia TEXT NOT NULL,
    //     FOREIGN KEY (nome) REFERENCES usuarios(nome),
    //     FOREIGN KEY (materia) REFERENCES materias(materia)
    // );`);
    });
  });
}
