CREATE TABLE jogadoras (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    numero_camisa INT NOT NULL,
    posicao VARCHAR(50) NOT NULL,
    url_imagem VARCHAR(255) NOT NULL
);

INSERT INTO jogadoras (nome, numero_camisa, posicao, url_imagem) VALUES
('Letícia Izidoro (Lelê)', 1, 'Goleira', '/images/players/leticia_izidoro.png'),
('Antônia', 2, 'Lateral-Direita', '/images/players/antonia.png'),
('Rafaelle Souza', 4, 'Zagueira', '/images/players/rafaelle_souza.png'),
('Lauren', 3, 'Zagueira', '/images/players/lauren.png'),
('Tamires', 6, 'Lateral-Esquerda', '/images/players/tamires.png'),
('Angelina', 8, 'Meio-campista', '/images/players/angelina.png'),
('Ary Borges', 17, 'Meio-campista', '/images/players/ary_borges.png'),
('Kerolin', 21, 'Meia-Atacante', '/images/players/kerolin.png'),
('Adriana Leal', 11, 'Atacante', '/images/players/adriana_leal.png'),
('Geyse Ferreira', 18, 'Atacante', '/images/players/geyse_ferreira.png'),
('Debinha', 9, 'Atacante', '/images/players/debinha.png');