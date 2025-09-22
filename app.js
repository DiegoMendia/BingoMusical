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
    { title: "Gasolina", artist: "Daddy Yankee" },
    { title: "Con Altura", artist: "Rosalía & J Balvin" },
    { title: "Tusa", artist: "Karol G & Nicki Minaj" },
    { title: "Baila Baila Baila", artist: "Ozuna" },
    { title: "Dákiti", artist: "Bad Bunny & Jhay Cortez" },
    { title: "Perreo Sola", artist: "Bad Bunny" },
    { title: "Safaera", artist: "Bad Bunny" },
    { title: "Yo Perreo Sola", artist: "Bad Bunny" },
    { title: "La Santa", artist: "Bad Bunny & Daddy Yankee" },
    { title: "Bichiyal", artist: "Bad Bunny" },
    { title: "Vete", artist: "Bad Bunny" },
    { title: "La Difícil", artist: "Bad Bunny" },
    { title: "Si Veo a Tu Mamá", artist: "Bad Bunny" },
    { title: "Pero Ya No", artist: "Bad Bunny" },
    { title: "Una Vez", artist: "Bad Bunny" },
    { title: "Ignorantes", artist: "Bad Bunny & Sech" },
    { title: "La Zona", artist: "Bad Bunny" },
    { title: "Haciendo Que Me Amas", artist: "Bad Bunny" },
    { title: "Si Estuviésemos Juntos", artist: "Bad Bunny" },
    { title: "Soy Peor", artist: "Bad Bunny" },
    { title: "Tu No Metes Cabra", artist: "Bad Bunny" },
    { title: "Chambea", artist: "Bad Bunny" },
    { title: "Desde el Corazón", artist: "Bad Bunny" },
    { title: "Ahora Me Llama", artist: "Karol G & Bad Bunny" },
    { title: "I Like It", artist: "Cardi B, Bad Bunny & J Balvin" },
    { title: "Mia", artist: "Bad Bunny ft. Drake" },
    { title: "La Romana", artist: "Bad Bunny ft. El Alfa" },
    { title: "Qué Pretendes", artist: "Bad Bunny & J Balvin" },
    { title: "Cuidao por Ahí", artist: "Bad Bunny & Tempo" },
    { title: "200 MPH", artist: "Bad Bunny & Diplo" },
    { title: "Ni Bien Ni Mal", artist: "Bad Bunny" },
    { title: "Solo de Mí", artist: "Bad Bunny" },
    { title: "Estamos Bien", artist: "Bad Bunny" },
    { title: "Como Un Bebé", artist: "Bad Bunny & J Balvin" },
    { title: "Tenemos Que Hablar", artist: "Bad Bunny" },
    { title: "Otra Noche en Miami", artist: "Bad Bunny" },
    { title: "25/8", artist: "Bad Bunny" },
    { title: "Nadie Sabe", artist: "Bad Bunny & Tainy" },
    { title: "Callaita", artist: "Bad Bunny & Tainy" },
    { title: "Un Peso", artist: "Bad Bunny & Marciano Cantero" },
    { title: "Loco Pero Millonario", artist: "Bad Bunny & Anuel AA" },
    { title: "La Última Vez", artist: "Bad Bunny & Anuel AA" },
    { title: "Eres Mía", artist: "Romeo Santos" },
    { title: "Propuesta Indecente", artist: "Romeo Santos" },
    { title: "Obsesión", artist: "Aventura" },
    { title: "Mi Corazoncito", artist: "Aventura" },
    { title: "El Perdedor", artist: "Enrique Iglesias & Marco Antonio Solís" },
    { title: "Bailando", artist: "Enrique Iglesias" },
    { title: "Hero", artist: "Enrique Iglesias" },
    { title: "Escape", artist: "Enrique Iglesias" },
    { title: "Tonight I'm Loving You", artist: "Enrique Iglesias" },
    { title: "I Like It", artist: "Enrique Iglesias & Pitbull" },
    { title: "Duele el Corazón", artist: "Enrique Iglesias & Wisin" },
    { title: "El Baño", artist: "Enrique Iglesias & Bad Bunny" },
    { title: "Move to Miami", artist: "Enrique Iglesias & Pitbull" },
    { title: "Súbeme la Radio", artist: "Enrique Iglesias" }
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