const songDatabase = [
    { title: "Mujer Bonita", artist: "Los Byby's" },
    { title: "Triste Realidad", artist: "Grupo Brumas" },
    { title: "La Bomba", artist: "Azul Azul" },
    { title: "El Baile De La Botella", artist: "Jose Luciano" },
    { title: "La Chica Del Bikini Azul", artist: "Luis Miguel" },
    { title: "En Tus Manos", artist: "Los Byby's" },
    { title: "Onda Onda", artist: "Axe Bahia" },
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
    { title: "La Diabla",ist: "DesaKTa2" },
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
    { title: "El Alacran", artist:"Sandy & Papo" },
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
    { title: "Que Tendrá El Petiso", artist: "" },
    { title: "Camarón", artist: "Riki Maravilla" },
    { title: "El Hijo de Cuca", artist: "Pocho La Pantera" },
    { title: "El Hombre Gato", artist: "Riki Maravilla" },
    { title: "¿Quién Se Tomó Todo El Vino?", artist: "" },
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

let currentGame = {
    gridSize: 6,
    gameMode: 'line',
    bingoCard: [],
    markedCells: [],
    playedSongs: [],
    currentSongIndex: -1,
    gameWon: false,
    playerName: '',
    gameStarted: false
};

// Función startNewGame mejorada con modal personalizado
function startNewGame() {
    // Mostrar el modal de bienvenida en lugar del prompt básico
    showWelcomeModal();
}

// Función para mostrar el modal de bienvenida
function showWelcomeModal() {
    // Crear el modal si no existe
    let modal = document.getElementById('welcomeModal');
    if (!modal) {
        modal = createWelcomeModal();
        document.body.appendChild(modal);
    }

    // Limpiar el campo de entrada
    const nameInput = modal.querySelector('#playerNameInput');
    nameInput.value = '';
    nameInput.classList.remove('error');

    // Mostrar el modal con animación
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
        // Foco automático en el campo de entrada
        nameInput.focus();
    }, 100);
}

// Función para crear el modal de bienvenida
function createWelcomeModal() {
    const modal = document.createElement('div');
    modal.id = 'welcomeModal';
    modal.className = 'welcome-modal';

    modal.innerHTML = `
        <div class="modal-overlay" onclick="hideWelcomeModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <div class="welcome-icon">🎵</div>
                <h2 class="welcome-title">¡Bienvenido al Bingo Musical!</h2>
                <p class="welcome-subtitle">Prepárate para una experiencia musical única</p>
            </div>
            
            <div class="modal-body">
                <div class="input-group">
                    <label for="playerNameInput" class="input-label">
                        <span class="label-icon">👤</span>
                        Ingresa tu nombre
                    </label>
                    <input 
                        type="text" 
                        id="playerNameInput" 
                        class="name-input" 
                        placeholder="Tu nombre aquí..."
                        maxlength="20"
                        autocomplete="off"
                    >
                    <div class="input-underline"></div>
                </div>
                
                <div class="error-message" id="nameErrorMessage">
                    ⚠️ Debes ingresar un nombre para continuar
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="btn-cancel" onclick="hideWelcomeModal()">
                    <span>Cancelar</span>
                </button>
                <button class="btn-start" onclick="validateAndStartGame()">
                    <span class="btn-icon">🚀</span>
                    <span>¡Comenzar a Jugar!</span>
                </button>
            </div>
            
            <div class="modal-decorations">
                <div class="decoration-note note-1">🎶</div>
                <div class="decoration-note note-2">🎵</div>
                <div class="decoration-note note-3">🎤</div>
                <div class="decoration-note note-4">🎸</div>
            </div>
        </div>
    `;

    // Agregar event listener para Enter
    const nameInput = modal.querySelector('#playerNameInput');
    nameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            validateAndStartGame();
        }
    });

    // Agregar event listener para validación en tiempo real
    nameInput.addEventListener('input', function () {
        clearNameError();
    });

    return modal;
}

// Función para ocultar el modal
function hideWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Función para validar y comenzar el juego
function validateAndStartGame() {
    const nameInput = document.getElementById('playerNameInput');
    const playerName = nameInput.value.trim();

    if (!playerName || playerName === '') {
        showNameError();
        return;
    }

    // Mostrar feedback de éxito
    showSuccessFeedback(() => {
        // Continuar con la lógica original del juego
        continueGameSetup(playerName);
        hideWelcomeModal();
    });
}

// Función para mostrar error de nombre
function showNameError() {
    const nameInput = document.getElementById('playerNameInput');
    const errorMessage = document.getElementById('nameErrorMessage');

    nameInput.classList.add('error');
    errorMessage.classList.add('show');

    // Animación de shake
    nameInput.classList.add('shake');
    setTimeout(() => {
        nameInput.classList.remove('shake');
    }, 600);

    // Foco en el input
    nameInput.focus();
}

// Función para limpiar error de nombre
function clearNameError() {
    const nameInput = document.getElementById('playerNameInput');
    const errorMessage = document.getElementById('nameErrorMessage');

    nameInput.classList.remove('error');
    errorMessage.classList.remove('show');
}

// Función para mostrar feedback de éxito
function showSuccessFeedback(callback) {
    const modal = document.getElementById('welcomeModal');
    const modalContent = modal.querySelector('.modal-content');

    // Agregar clase de éxito
    modalContent.classList.add('success');

    // Cambiar el contenido temporalmente
    const originalContent = modalContent.innerHTML;
    modalContent.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✨</div>
            <h3>¡Perfecto!</h3>
            <p>Preparando tu juego...</p>
            <div class="success-loader">
                <div class="loader-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        callback();
        modalContent.innerHTML = originalContent;
        modalContent.classList.remove('success');
    }, 1500);
}

// Función para continuar con la configuración del juego (lógica original)
function continueGameSetup(playerName) {
    const gridSize = parseInt(document.getElementById('gridSize').value);
    const gameMode = document.getElementById('gameMode').value;

    currentGame = {
        gridSize: gridSize,
        gameMode: gameMode,
        bingoCard: [],
        markedCells: Array(gridSize).fill(false),
        playedSongs: [],
        currentSongIndex: -1,
        gameWon: false,
        playerName: playerName,
        gameStarted: true
    };

    // Mostrar animación de bienvenida personalizada
    showPersonalizedWelcome(playerName);

    setTimeout(() => {
        generateBingoCard();
        updateCardTitle();
        updateGameInfo();
        updatePlayedSongsList();
        document.getElementById('currentSongTitle').textContent = 'Marca Tu Cancion en el cartón';
        document.getElementById('currentSongArtist').textContent = 'para ganar';
        document.getElementById('winnerNotification').style.display = 'none';
    }, 2000);
}

// Función para mostrar bienvenida personalizada
function showPersonalizedWelcome(playerName) {
    // Crear overlay de bienvenida personalizada
    const welcomeOverlay = document.createElement('div');
    welcomeOverlay.className = 'personalized-welcome';
    welcomeOverlay.innerHTML = `
        <div class="welcome-animation">
            <div class="welcome-message">
                <h2>¡Hola ${playerName}! 👋</h2>
                <p>Tu aventura musical está por comenzar...</p>
                <div class="musical-animation">
                    <span class="note">🎵</span>
                    <span class="note">🎶</span>
                    <span class="note">🎵</span>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(welcomeOverlay);

    setTimeout(() => {
        welcomeOverlay.classList.add('show');
    }, 100);

    setTimeout(() => {
        welcomeOverlay.classList.remove('show');
        setTimeout(() => {
            welcomeOverlay.remove();
        }, 500);
    }, 1800);
}

function generateBingoCard() {
    // Seleccionar canciones aleatorias para el cartón
    const shuffled = [...songDatabase].sort(() => 0.5 - Math.random());
    currentGame.bingoCard = shuffled.slice(0, currentGame.gridSize);

    const grid = document.getElementById('bingoGrid');
    grid.innerHTML = '';
    grid.className = `bingo-grid grid-${currentGame.gridSize}`;

    currentGame.bingoCard.forEach((song, index) => {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell';
        cell.dataset.index = index;
        cell.innerHTML = `<div><strong>${song.title}</strong><br><small>${song.artist}</small></div>`;
        cell.onclick = () => toggleCell(index);
        grid.appendChild(cell);
    });
}

function generateEmptyBingoCard() {
    const gridSize = parseInt(document.getElementById('gridSize').value);
    const grid = document.getElementById('bingoGrid');
    grid.innerHTML = '';
    grid.className = `bingo-grid grid-${gridSize}`;

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell empty-cell';
        cell.innerHTML = `<div class="empty-message">🎵<br><small>Inicia el juego</small></div>`;
        grid.appendChild(cell);
    }
}

function updateCardTitle() {
    const cardTitle = document.getElementById('cardTitle');
    if (currentGame.gameStarted && currentGame.playerName) {
        cardTitle.textContent = `Cartón de ${currentGame.playerName}`;
    } else {
        cardTitle.textContent = 'Tu Cartón de Bingo';
    }
}

function toggleCell(index) {
    if (currentGame.gameWon || !currentGame.gameStarted) return;

    const cell = document.querySelector(`[data-index="${index}"]`);
    currentGame.markedCells[index] = !currentGame.markedCells[index];

    if (currentGame.markedCells[index]) {
        cell.classList.add('marked');
    } else {
        cell.classList.remove('marked');
    }

    updateGameInfo();

    // Verificar automáticamente si hay ganador después de marcar
    setTimeout(() => checkWinner(), 300);
}

function nextSong() {
    if (currentGame.gameWon || !currentGame.gameStarted) {
        if (!currentGame.gameStarted) {
            alert('Debes iniciar un nuevo juego primero');
        }
        return;
    }

    // Filtrar canciones no tocadas
    const unplayedSongs = songDatabase.filter(song =>
        !currentGame.playedSongs.some(played =>
            played.title === song.title && played.artist === song.artist
        )
    );

    if (unplayedSongs.length === 0) {
        alert('¡Todas las canciones han sido tocadas!');
        return;
    }

    // Seleccionar una canción aleatoria de las no tocadas
    const randomIndex = Math.floor(Math.random() * unplayedSongs.length);
    const selectedSong = unplayedSongs[randomIndex];

    currentGame.playedSongs.push(selectedSong);
    currentGame.currentSongIndex++;

    document.getElementById('currentSongTitle').textContent = selectedSong.title;
    document.getElementById('currentSongArtist').textContent = selectedSong.artist;
    document.getElementById('songNumber').textContent = currentGame.currentSongIndex + 1;
    document.getElementById('songsPlayed').textContent = currentGame.playedSongs.length;

    updatePlayedSongsList();

    // Auto-marcar si la canción está en el cartón
    const cardIndex = currentGame.bingoCard.findIndex(card =>
        card.title === selectedSong.title && card.artist === selectedSong.artist
    );

    if (cardIndex !== -1 && !currentGame.markedCells[cardIndex]) {
        setTimeout(() => {
            toggleCell(cardIndex);
            // Verificar automáticamente si hay ganador
            setTimeout(() => {
                if (checkWinner()) {
                    return; // Si hay ganador, no continuar
                }
            }, 500);
        }, 1000);
    }
}

function updatePlayedSongsList() {
    const list = document.getElementById('playedSongsList');
    if (!list) return;

    list.innerHTML = '';

    currentGame.playedSongs.slice(-10).reverse().forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'played-song';
        songDiv.innerHTML = `<strong>${song.title}</strong><br><small>${song.artist}</small>`;
        list.appendChild(songDiv);
    });
}

function checkWinner() {
    if (currentGame.gameWon || !currentGame.gameStarted) return false;

    let isWinner = false;

    switch (currentGame.gameMode) {
        case 'line':
            isWinner = checkLineComplete();
            break;
        case 'corners':
            isWinner = checkCornersComplete();
            break;
        case 'full':
            isWinner = checkFullCard();
            break;
    }

    if (isWinner) {
        currentGame.gameWon = true;
        showWinnerNotification();
    }

    return isWinner;
}

function showWinnerNotification() {
    const notification = document.getElementById('winnerNotification');
    const winnerName = document.getElementById('winnerName');
    winnerName.textContent = currentGame.playerName;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 4000);
}

function checkLineComplete() {
    if (currentGame.gridSize === 6) {
        // 3x2 grid - verificar filas
        return (currentGame.markedCells[0] && currentGame.markedCells[1] && currentGame.markedCells[2]) ||
            (currentGame.markedCells[3] && currentGame.markedCells[4] && currentGame.markedCells[5]);
    } else {
        // 3x3 grid - verificar filas, columnas y diagonales
        return (currentGame.markedCells[0] && currentGame.markedCells[1] && currentGame.markedCells[2]) ||
            (currentGame.markedCells[3] && currentGame.markedCells[4] && currentGame.markedCells[5]) ||
            (currentGame.markedCells[6] && currentGame.markedCells[7] && currentGame.markedCells[8]) ||
            (currentGame.markedCells[0] && currentGame.markedCells[3] && currentGame.markedCells[6]) ||
            (currentGame.markedCells[1] && currentGame.markedCells[4] && currentGame.markedCells[7]) ||
            (currentGame.markedCells[2] && currentGame.markedCells[5] && currentGame.markedCells[8]) ||
            (currentGame.markedCells[0] && currentGame.markedCells[4] && currentGame.markedCells[8]) ||
            (currentGame.markedCells[2] && currentGame.markedCells[4] && currentGame.markedCells[6]);
    }
}

function checkCornersComplete() {
    if (currentGame.gridSize === 6) {
        // 3x2 grid - las 4 esquinas son índices 0, 2, 3, 5
        return currentGame.markedCells[0] && currentGame.markedCells[2] &&
            currentGame.markedCells[3] && currentGame.markedCells[5];
    } else {
        // 3x3 grid - las 4 esquinas son índices 0, 2, 6, 8
        return currentGame.markedCells[0] && currentGame.markedCells[2] &&
            currentGame.markedCells[6] && currentGame.markedCells[8];
    }
}

function checkFullCard() {
    return currentGame.markedCells.every(cell => cell);
}

function updateGameInfo() {
    const modeNames = {
        'line': 'Línea completa',
        'corners': 'Cuatro esquinas',
        'full': 'Cartón lleno'
    };

    document.getElementById('currentMode').textContent = modeNames[currentGame.gameMode];
    document.getElementById('markedCount').textContent = currentGame.markedCells.filter(cell => cell).length;
}

// Función initializeGame mejorada con efectos visuales
function initializeGame() {
    // Mostrar un loader/spinner mientras se inicializa
    showInitializationLoader();

    // Agregar un pequeño delay para mostrar el efecto de carga
    setTimeout(() => {
        // Animar la desaparición del contenido anterior
        fadeOutCurrentContent(() => {
            // Generar el cartón vacío
            generateEmptyBingoCard();
            updateCardTitle();
            updateGameInfo();

            // Actualizar los elementos con efectos de escritura
            typewriterEffect('currentSongTitle', '¡Bienvenido al Bingo Musica! 🎵', 50);

            setTimeout(() => {
                typewriterEffect('currentSongArtist', 'Presiona "COMENZAR" para comenzar', 30);
            }, 1500);

            document.getElementById('songNumber').textContent = '';
            document.getElementById('winnerNotification').style.display = 'none';

            // Animar la aparición del nuevo contenido
            fadeInNewContent();

            // Agregar efecto de pulso a las celdas vacías
            addPulseEffectToEmptyCells();

            // Ocultar el loader
            hideInitializationLoader();
        });
    }, 800);
}

// Función para mostrar loader de inicialización
function showInitializationLoader() {
    // Crear overlay de loading si no existe
    let loader = document.getElementById('initLoader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'initLoader';
        loader.className = 'initialization-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="musical-note">🎵</div>
                <div class="loader-text">Preparando el juego...</div>
                <div class="loader-bar">
                    <div class="loader-progress"></div>
                </div>
            </div>
        `;
        document.body.appendChild(loader);
    }

    // Mostrar con animación
    loader.style.display = 'flex';
    setTimeout(() => loader.classList.add('show'), 100);

    // Animar la barra de progreso
    const progressBar = loader.querySelector('.loader-progress');
    progressBar.style.width = '0%';
    setTimeout(() => progressBar.style.width = '100%', 200);
}

// Función para ocultar loader
function hideInitializationLoader() {
    const loader = document.getElementById('initLoader');
    if (loader) {
        loader.classList.remove('show');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
}

// Función para efecto de desvanecimiento del contenido actual
function fadeOutCurrentContent(callback) {
    const elementsToFade = [
        document.getElementById('bingoGrid'),
        document.querySelector('.current-song'),
        document.querySelector('.game-info')
    ];

    elementsToFade.forEach(el => {
        if (el) {
            el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            el.style.opacity = '0.3';
            el.style.transform = 'scale(0.95)';
        }
    });

    setTimeout(callback, 500);
}

// Función para efecto de aparición del nuevo contenido
function fadeInNewContent() {
    const elementsToShow = [
        document.getElementById('bingoGrid'),
        document.querySelector('.current-song'),
        document.querySelector('.game-info')
    ];

    elementsToShow.forEach((el, index) => {
        if (el) {
            setTimeout(() => {
                el.style.transition = 'opacity 0.8s ease-in, transform 0.8s ease-in';
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            }, index * 200);
        }
    });
}

// Función para efecto de escritura (typewriter)
function typewriterEffect(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.textContent = '';
    element.style.borderRight = '2px solid rgba(255,255,255,0.8)';

    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            // Quitar el cursor después de un momento
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }, speed);
}

// Función para agregar efecto de pulso a las celdas vacías
function addPulseEffectToEmptyCells() {
    const emptyCells = document.querySelectorAll('.empty-cell');

    emptyCells.forEach((cell, index) => {
        setTimeout(() => {
            cell.classList.add('pulse-animation');
        }, index * 150);
    });

    // Remover la animación después de un tiempo
    setTimeout(() => {
        emptyCells.forEach(cell => {
            cell.classList.remove('pulse-animation');
        });
    }, 3000);
}

// Función mejorada para generar cartón vacío con animaciones
function generateEmptyBingoCard() {
    const gridSize = parseInt(document.getElementById('gridSize').value);
    const grid = document.getElementById('bingoGrid');
    grid.innerHTML = '';
    grid.className = `bingo-grid grid-${gridSize}`;

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell empty-cell';
        cell.innerHTML = `<div class="empty-message">🎵<br><small>Inicia el juego</small></div>`;
        cell.style.opacity = '0';
        cell.style.transform = 'translateY(20px)';
        grid.appendChild(cell);

        // Animar la aparición de cada celda
        setTimeout(() => {
            cell.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            cell.style.opacity = '1';
            cell.style.transform = 'translateY(0)';
        }, i * 100);
    }
}

// Función auxiliar para agregar efectos de partículas (opcional)
function addWelcomeParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'welcome-particles';
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = ['🎵', '🎶', '🎤', '🎸'][Math.floor(Math.random() * 4)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particleContainer.appendChild(particle);
    }

    // Remover partículas después de la animación
    setTimeout(() => {
        particleContainer.remove();
    }, 5000);
}

// Inicializar el juego con cartón vacío
initializeGame();