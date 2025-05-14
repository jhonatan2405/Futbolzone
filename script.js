const apiKey = '3'; // Clave de API de prueba para TheSportsDB
const leagues = [
    { id: '4328', name: 'Premier League' },  // Premier League
    { id: '4335', name: 'La Liga' },         // La Liga
    { id: '4332', name: 'Serie A' }          // Serie A
];
const season = '2024-2025';
  
let currentLeagueIndex = 0; // Índice para la liga actual
  
// Recorrer todas las ligas y hacer la consulta
Promise.all(leagues.map(league => {
    const apiUrl = `https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptable.php?l=${league.id}&s=${season}`;
  
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.table) {
                return { leagueId: league.id, name: league.name, table: data.table };
            } else {
                return { leagueId: league.id, name: league.name, table: null };
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            return { leagueId: league.id, name: league.name, table: null };
        });
}))
.then(results => {
    mostrarTablas(results);
    actualizarTabla(currentLeagueIndex); // Mostrar la primera liga por defecto
})
.catch(error => {
    console.error('Error al obtener los datos de las ligas:', error);
});
  
function mostrarTablas(results) {
    const container = document.getElementById('tabla-clasificacion');
    container.innerHTML = `
        <div class="navegacion">
            <button id="prevBtn" onclick="navegarTabla(-1)">&#8592; Anterior</button>
            <button id="nextBtn" onclick="navegarTabla(1)">Siguiente &#8594;</button>
        </div>
        <div id="tabla-contenedor">
            ${results.map((result, index) => `
                <div class="tabla" id="tabla-${result.leagueId}" style="display: ${index === currentLeagueIndex ? 'block' : 'none'}">
                    <h2>${result.name}</h2>
                    ${result.table ? `
                        <table>
                            <thead>
                                <tr>
                                    <th class="pos-col">Pos</th>
                                    <th class="team-col">Equipo</th>
                                    <th class="num-col">
                                        <span class="header-full">PJ</span>
                                        <span class="header-short">PJ</span>
                                    </th>
                                    <th class="num-col">
                                        <span class="header-full">G</span>
                                        <span class="header-short">G</span>
                                    </th>
                                    <th class="num-col">
                                        <span class="header-full">E</span>
                                        <span class="header-short">E</span>
                                    </th>
                                    <th class="num-col">
                                        <span class="header-full">P</span>
                                        <span class="header-short">P</span>
                                    </th>
                                    <th class="num-col">
                                        <span class="header-full">GF</span>
                                        <span class="header-short">GF</span>
                                    </th>
                                    <th class="num-col">
                                        <span class="header-full">GC</span>
                                        <span class="header-short">GC</span>
                                    </th>
                                    <th class="num-col">
                                        <span class="header-full">DG</span>
                                        <span class="header-short">DG</span>
                                    </th>
                                    <th class="num-col">
                                        <span class="header-full">Pts</span>
                                        <span class="header-short">Pts</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                ${result.table.map(equipo => `
                                    <tr>
                                        <td class="pos-col">${equipo.intRank}</td>
                                        <td class="team-col" title="${equipo.strTeam}">${equipo.strTeam}</td>
                                        <td class="num-col">${equipo.intPlayed}</td>
                                        <td class="num-col">${equipo.intWin}</td>
                                        <td class="num-col">${equipo.intDraw}</td>
                                        <td class="num-col">${equipo.intLoss}</td>
                                        <td class="num-col">${equipo.intGoalsFor}</td>
                                        <td class="num-col">${equipo.intGoalsAgainst}</td>
                                        <td class="num-col">${equipo.intGoalDifference}</td>
                                        <td class="num-col">${equipo.intPoints}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    ` : '<p>No se encontraron datos para esta liga.</p>'}
                </div>
            `).join('')}
        </div>
    `;
}
  
function navegarTabla(direction) {
    currentLeagueIndex = (currentLeagueIndex + direction + leagues.length) % leagues.length; // Cicla entre las ligas
    actualizarTabla(currentLeagueIndex);
}
  
function actualizarTabla(index) {
    const tablas = document.querySelectorAll('.tabla');
    tablas.forEach((tabla, i) => {
        tabla.style.display = i === index ? 'block' : 'none'; // Muestra solo la tabla correspondiente
    });
}



// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const menuItems = document.getElementById('menuItems');

    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', function() {
            menuItems.classList.toggle('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].classList.toggle('rotate-45');
            spans[1].classList.toggle('opacity-0');
            spans[2].classList.toggle('-rotate-45');
        });
    }

    // Carrusel de noticias
    const carousel = document.getElementById('noticiasCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    if (carousel && prevBtn && nextBtn) {
        const items = carousel.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        // Auto-rotación del carrusel
        setInterval(function() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 5000);
    }

    // Animación para las tarjetas de equipos
    const equipoCards = document.querySelectorAll('.equipo-card');
    
    equipoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    function animateStats() {
        const stats = [
            { id: 'golesTotales', target: 1247 },
            { id: 'partidosJugados', target: 380 },
            { id: 'tarjetasRojas', target: 89 },
            { id: 'asistencias', target: 876 }
        ];
    
        stats.forEach(stat => {
            const element = document.getElementById(stat.id);
            if (!element) return;
    
            let current = 0;
            const increment = Math.ceil(stat.target / 100);
            const duration = 2000;
            const interval = duration / (stat.target / increment);
    
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                    element.textContent = stat.target;
                    clearInterval(timer);
                } else {
                    element.textContent = current;
                }
            }, interval);
        });
    }
    
    // Observador para disparar la animación solo cuando se ve
    const statsSection = document.querySelector('.estadisticas');
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateStats();
                hasAnimated = true; // Solo una vez
            }
        });
    }, {
        threshold: 0.5 // 50% visible
    });
    
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Comprobar al cargar y al hacer scroll
    window.addEventListener('scroll', checkIfInView);
    checkIfInView();

    // Efecto de scroll suave para los enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (menuItems.classList.contains('active')) {
                    menuItems.classList.remove('active');
                }
            }
        });
    });

    // Cambiar el estilo del header al hacer scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});