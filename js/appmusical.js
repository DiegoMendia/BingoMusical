const songDatabase = [
    { title: "Mujer Bonita", artist: "Los Byby's" },
    { title: "Triste Realidad", artist: "Grupo Brumas" },
    { title: "La Bomba", artist: "Azul Azul" },
    { title: "El Baile De La Botella", artist: "Jose Luciano" },
    { title: "La Chica Del Bikini Azul", artist: "Luis Miguel" },
    { title: "En Tus Manos", artist: "Los Byby's" },
    { title: "Onda Onda", artist: "Axe Bahia" },
    { title: "Por que te tengo que olvidar", artist: "Joaquin Sosa" },
    { title: "Mujer Amante", artist: "Rata Blanca" },
    { title: "Ji Ji Ji", artist: "Patricio Rey y sus Redonditos  de Ricota" },
    { title: "El Obrero", artist: "Los Kjarkas" },
    { title: "Auto Rojo", artist: "Vilma Palma e Vampiros" },
    { title: "La Rubia del Avion", artist: "Los Ladrones Sueltos" },
    { title: "Por Lo Que Yo Te Quiero", artist: "Rodrigo" },
    { title: "Runaway", artist: "Los Pericos" },
    { title: "Suave", artist: "Luis Miguel" },
    { title: "A veces", artist: "Mambru" },
    { title: "Levantando las Manos", artist: "El Simbolo" },
    { title: "Llamado de Emergencia", artist: "Daddy Yankee" },
    { title: "Gasolina", artist: "Daddy Yankee" },
    { title: "Lloviendo Estrellas ", artist: "Cristian Castro" },
    { title: "La Incondicional", artist: "Luis Miguel" },
    { title: "Ahora Te Puedes Marchar", artist: "Luis Miguel" },
    { title: "Como Te Voy a Olvidar", artist: "Los Angeles Azules" },
    { title: "Te Vas", artist: "Americo" },
    { title: "Mentirosa", artist: "Ragafa" },
    { title: "No Te Creas Tan Importante", artist: "Damas Gratis, Virus Kumbieron" },
    { title: "Mayonesa", artist: "Chocolate" },
    { title: "Niña Bonita", artist: "Chino & Nacho" },
    { title: "Tusa", artist: "Karol G, Nicki Minaj" },
    { title: "Mi Enfermedad", artist: "Fabiana Cantilo" },
    { title: "La Vida Es Un Carnaval", artist: "Celia Cruz" },
    { title: "Macarena", artist: "Los Del Rio" },
    { title: "Bailando Bachata", artist: "Chayanne" },
    { title: "Rosas", artist: "La Oreja de Van Gogh" },
    { title: "Demoliendo Hoteles", artist: "Charly Garcia" },
    { title: "Amor Salvaje", artist: "Chaqueño Palavecino" },
    { title: "Provocame", artist: "Chayanne" },
    { title: "Corazon", artist: "Los Autenticos Decadentes" },
    { title: "De Musica Ligera", artist: "Soda Stereo" },
    { title: "Llegó tu Papi", artist: "Sabroso" },
    { title: "Una Muchacha y una Guitarra", artist: "Sandro" },
    { title: "Beso a beso", artist: "La Mona Jimenez" },
    { title: "Agárrense de las Manos", artist: "Jose Luis Rodriguez" },
    { title: "Que Me Falte Todo", artist: "Luck Ra, Abel Pintos" },
    { title: "La Camisa Negra", artist: "Juanes" },
    { title: "Olvidame y Pega la Vuelta", artist: "Pinpinela" },
    { title: "Corazon Mentiroso", artist: "Karina" },
    { title: "Ciega, Sordamuda", artist: "Shakira" },
    { title: "Bichota", artist: "Karol G" },
    { title: "El Polvito Del Amor", artist: "Amor Azul" },
    { title: "Sopa De Caracol", artist: "Sopa De Caracol" },
    { title: "Ave Maria", artist: "David Bizbal" },
    { title: "Inocente", artist: "La Delio Valdez" },
    { title: "Dime Si Eres Feliz", artist: "Hernan y La Champion's Liga" },
    { title: "Pienso en Ti", artist: "Las Culisueltas" },
    { title: "Desesperada", artist: "Marta Sanchez" },
    { title: "Una Calle Nos Separa", artist: "Nestor En Bloque" },
    { title: "La Cumbia De Los Trapos", artist: "Yerba Brava" },
    { title: "No Puedo Fingirlo", artist: "Ulises Bueno, DesaKTa2" },
    { title: "Lamento Boliviano", artist: "Los Enanitos Verdes" },
    { title: "Lo mejor del amor", artist: "Rodrigo" },
    { title: "Una Cerveza", artist: "Rafaga" },
    { title: "Hola Perdida", artist: "Luck Ra, KHEA" },
    { title: "El Bombon", artist: "Los Palmeras" },
    { title: "El Taxi", artist: "Sensato, Osmari Garcia" },
    { title: "Monaco", artist: "DesaKTa2" },
    { title: "La Diabla", artist: "DesaKTa2" },
    { title: "El Olvidao", artist: "Nestor Garnica" },
    { title: "Caribe Sur-2020", artist: "Man Ray" },
    { title: "Gustito a Mistol", artist: "Los Changos Oficial" },
    { title: "Olor a Carnaval", artist: "La Bruja Salguero, Bruno Arias" },
    { title: "Caminantes", artist: "Bruno Arias" },
    { title: "Seleccion de Taquiraris", artist: "Becho Riveiro" },
    { title: "Yo No Te Merezco", artist: "Christian Herrera y Matacos" },
    { title: "Manos de Tijera", artist: "Christian Herrera y Matacos" },
    { title: "Como Te Va Mi Amor", artist: "Angelo Aranda" },
    { title: "Desde Siempre y para Siempre", artist: "Los Manseros Santiagueños" },
    { title: "Cartas Sin Marcar", artist: "Andres Calamaro" },
    { title: "Santiago Querido", artist: "Leo Dan, Los Manseros Santiagueños" },
    { title: "Fabulas de Amor", artist: "Los Changos" },
    { title: "Baila Morena", artist: "Hector & Tito, Luny Tunesm Noriega" },
    { title: "Aserejé", artist: "Las Ketchup" },
    { title: "Va A Ser Dificil Sin Ti", artist: "Joaquin Sosa" },
    { title: "Todos Me Miran", artist: "Gloria Trevi" },
    { title: "Cuerpo de Sirena", artist: "Cesar y su Grupo Felicidad" },
    { title: "Quiero Saber Que Es el Amor", artist: "Grupo Bandy2" },
    { title: "Mamma Maria", artist: "Ricchi E Poveri" },
    { title: "Corazón de Miel", artist: "Santiago Cueto" },
    { title: "Marinero de Luces", artist: " Isabel Pantoja" },
    { title: "Carla", artist: "Jambao" },
    { title: "Se Parece Mas A Ti", artist: "Jambao" },
    { title: "No Me Acuerdo", artist: "Thalia, Natti Natasha" },
    { title: "A Quien Le Importa", artist: "Thalia" },
    { title: "El Alacran", artist: "Sandy & Papo" },
    { title: "Violeta", artist: "Alcides" },
    { title: "Pintame", artist: "Elvis Crespo" },
    { title: "Estoy Saliendo Con un Chabon", artist: "Los Sultanes" },
    { title: "Eterno Amor", artist: "Los Manseros Santiagueños" },
    { title: "La Pollera Amarilla", artist: "Gladys la Bomba Tucumana" },
    { title: "Cachete, Pechito y Ombligo", artist: "Pancho Y La Sonora Colorada" },
    { title: "Por Que Sera", artist: "Agrupacion Euphoria" },
    { title: "Pica, Pica", artist: "Amor Sagrado, Grupo La Pantera" },
    { title: "Anaranjado", artist: "Los Changos" },
    { title: "Fiera Inquieta-Quien Es Ese Hombre", artist: "Lady Noriega" },
    { title: "Nunca me faltes", artist: "Antonio Rios" },
    { title: "Con la Misma Moneda", artist: "Karina" },
    { title: "Llora me llama", artist: "Grupo Play" },
    { title: "Dale vieja dale", artist: "Ulises Bueno" },
    { title: "Maestra", artist: "Grupo Bandy2" },
    { title: "El Maestro", artist: "Antonio Rios" },
    { title: "Tu Misterioso Alguien", artist: "Luck Ra, Miranda" },
    { title: "Que Tendrá El Petiso", artist: "Ricky Maravilla" },
    { title: "Camarón", artist: "Riki Maravilla" },
    { title: "El Hijo de Cuca", artist: "Pocho La Pantera" },
    { title: "El Hombre Gato", artist: "Ricki Maravilla" },
    { title: "¿Quién Se Tomó Todo El Vino?", artist: "La Mona Jimenez" },
    { title: "La Lata", artist: "Supermerk2" },
    { title: "Livin'la Vida Loca", artist: "Ricky Martin" },
    { title: "Rakata", artist: "Wisin & Yandel" },
    { title: "Ela Me Levantó", artist: "Daddy Yankee" },
    { title: "Na De Na", artist: "Angel Y Khriz, Gocho, John Eric" },
    { title: "Baila Morena", artist: "Fedu DJ" },
    { title: "Tocarte Toa", artist: "Big Yamo, Natya" },
    { title: "Salió El Sol", artist: "Don Omar" },
    { title: "Que Calor", artist: "Supermerk2" },
    { title: "La Resaka", artist: "Supermerk2" },
    { title: "Se Te Ve la Tanga", artist: "Damas Gratis" },
    { title: "Tus Ojos Lloran por Amor", artist: "Los Lirios" },
    { title: "Aventura", artist: "Los Lirios" },
    { title: "Siempre Es La Misma Situacion", artist: "Barrabox" }
];

let selectedSongs = [];

function searchSongs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');

    if (!searchTerm) {
        resultsContainer.classList.remove('active');
        return;
    }

    const results = songDatabase.filter(song =>
        song.title.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No se encontraron canciones</div>';
        resultsContainer.classList.add('active');
        return;
    }

    resultsContainer.innerHTML = '';
    results.forEach(song => {
        const isSelected = selectedSongs.some(s =>
            s.title === song.title && s.artist === song.artist
        );

        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item' + (isSelected ? ' selected' : '');
        resultItem.innerHTML = `
                    <strong>${song.title}</strong>
                    <small>${song.artist}</small>
                `;
        resultItem.onclick = () => selectFromSearch(song, resultItem);
        resultsContainer.appendChild(resultItem);
    });

    resultsContainer.classList.add('active');
}

function selectFromSearch(song, element) {
    const songIndex = selectedSongs.findIndex(s =>
        s.title === song.title && s.artist === song.artist
    );

    const gridIndex = songDatabase.findIndex(s =>
        s.title === song.title && s.artist === song.artist
    );

    if (songIndex === -1) {
        // Agregar canción
        selectedSongs.push(song);
        element.classList.add('selected');
        if (gridIndex !== -1) {
            const cell = document.querySelector(`[data-index="${gridIndex}"]`);
            if (cell) cell.classList.add('marked');
        }
    } else {
        // Quitar canción
        selectedSongs.splice(songIndex, 1);
        element.classList.remove('selected');
        if (gridIndex !== -1) {
            const cell = document.querySelector(`[data-index="${gridIndex}"]`);
            if (cell) cell.classList.remove('marked');
        }
    }

    updateSelectedSongsList();
}

function initializeGrid() {
    const grid = document.getElementById('bingoGrid');
    grid.innerHTML = '';

    document.getElementById('totalSongs').textContent = songDatabase.length;

    songDatabase.forEach((song, index) => {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell';
        cell.dataset.index = index;
        cell.innerHTML = `<div><strong>${song.title}</strong><br><small>${song.artist}</small></div>`;
        cell.onclick = () => toggleCell(index);
        grid.appendChild(cell);
    });
}

function toggleCell(index) {
    const cell = document.querySelector(`[data-index="${index}"]`);
    const song = songDatabase[index];

    const songIndex = selectedSongs.findIndex(s =>
        s.title === song.title && s.artist === song.artist
    );

    if (songIndex === -1) {
        // Agregar canción
        selectedSongs.push(song);
        cell.classList.add('marked');
    } else {
        // Quitar canción
        selectedSongs.splice(songIndex, 1);
        cell.classList.remove('marked');
    }

    updateSelectedSongsList();
}

function updateSelectedSongsList() {
    const list = document.getElementById('playedSongsList');
    const count = document.getElementById('selectedCount');

    count.textContent = selectedSongs.length;

    if (selectedSongs.length === 0) {
        list.innerHTML = '<div class="empty-message">No hay canciones seleccionadas</div>';
        return;
    }

    list.innerHTML = '';
    selectedSongs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'played-song';
        songDiv.innerHTML = `<strong>${song.title}</strong><small>${song.artist}</small>`;
        list.appendChild(songDiv);
    });
}

// Inicializar al cargar
initializeGrid();