// ============================================
// JQUERY - INTERACTIVITÉ & DOM
// ============================================

$(document).ready(function() {

    // ============================================
    //  ANIMATIONS DES BARRES DE COMPÉTENCES
    // ============================================
    function animateSkillBars() {
        $('.skill-progress').each(function() {
            const level = $(this).data('level');
            $(this).css('width', level + '%');
        });
    }

    // Vérifier si les barres sont visibles au scroll
    $(window).on('scroll', function() {
        if ($('.skill-bar').length > 0) {
            const scrollTop = $(window).scrollTop();
            const elementOffset = $('.skill-bar').first().offset().top;
            
            if (scrollTop + $(window).height() > elementOffset && !$('.skill-bar').hasClass('animated')) {
                $('.skill-bar').addClass('animated');
                animateSkillBars();
            }
        }
    });

    // Animation au hover
    $('.skill-item').hover(
        function() {
            $(this).find('.skill-progress').stop(true, true).animate({
                width: '+=5%'
            }, 300);
        },
        function() {
            const level = $(this).find('.skill-progress').data('level');
            $(this).find('.skill-progress').stop(true, true).animate({
                width: level + '%'
            }, 300);
        }
    );

    // ============================================
    //  VALIDATION DU FORMULAIRE DE CONTACT
    // ============================================
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        // Réinitialiser les messages d'erreur
        $('.error-message').text('').removeClass('show');

        // Validation du nom
        if (name === '') {
            $('#name-error').text('Le nom est requis').addClass('show');
            isValid = false;
        } else if (name.length < 3) {
            $('#name-error').text('Le nom doit contenir au moins 3 caractères').addClass('show');
            isValid = false;
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#email-error').text('L\'email est requis').addClass('show');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#email-error').text('Veuillez entrer une adresse email valide').addClass('show');
            isValid = false;
        }

        // Validation du message
        if (message === '') {
            $('#message-error').text('Le message est requis').addClass('show');
            isValid = false;
        } else if (message.length < 10) {
            $('#message-error').text('Le message doit contenir au moins 10 caractères').addClass('show');
            isValid = false;
        }

        // Si valide, afficher un message de succès
        if (isValid) {
            const feedback = $('#form-feedback');
            feedback.text('✓ Message envoyé avec succès ! Merci de m\'avoir contacté.').addClass('success').removeClass('error');
            
            // Réinitialiser le formulaire
            $('#contact-form')[0].reset();
            
            // Masquer le message après 5 secondes
            setTimeout(function() {
                feedback.removeClass('success').text('');
            }, 5000);
        }
    });

    // ============================================
    //  NAVIGATION MOBILE - HAMBURGER MENU
    // ============================================
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

    // Fermer le menu au clic sur un lien
    $('.nav-link').on('click', function() {
        $('.hamburger').removeClass('active');
        $('.nav-menu').removeClass('active');
    });

    // ============================================
    //  SMOOTH SCROLL & ACTIVE NAV LINK
    // ============================================
    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();

        $('section').each(function() {
            const sectionOffset = $(this).offset().top - 100;
            const sectionHeight = $(this).outerHeight();
            const sectionId = $(this).attr('id');

            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                $('.nav-link').removeClass('active');
                $(`a[href="#${sectionId}"]`).addClass('active');
            }
        });
    });

    // ============================================
    //  SCROLL REVEAL ANIMATIONS
    // ============================================
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.about-content p, .skill-category, .timeline-item, .project-card');

        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    $(window).on('scroll', revealOnScroll);

    // ============================================
    //  TOOLTIP AU SURVOL (Bonus)
    // ============================================
    $('.tech-tag').hover(
        function() {
            $(this).css({
                'background': 'rgba(255, 0, 110, 0.4)',
                'transform': 'scale(1.1)'
            });
        },
        function() {
            $(this).css({
                'background': 'rgba(255, 0, 110, 0.2)',
                'transform': 'scale(1)'
            });
        }
    );

    // ============================================
    //   COMPTEUR DE SECTIONS VISITÉES
    // ============================================
    let visitedSections = new Set();
    
    $(window).on('scroll', function() {
        $('section').each(function() {
            const sectionId = $(this).attr('id');
            const elementOffset = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            
            if (scrollTop + $(window).height() > elementOffset) {
                visitedSections.add(sectionId);
            }
        });
    });

});

// ============================================
// REACT - COMPOSANTS DYNAMIQUES
// ============================================

// Composant ProjectCard
function ProjectCard({ project }) {
    return React.createElement(
        'div',
        { className: 'project-card' },
        React.createElement('h3', { className: 'project-title' }, project.title),
        React.createElement('p', { className: 'project-description' }, project.description),
        React.createElement(
            'div',
            { className: 'project-tech' },
            project.technologies.map((tech, index) =>
                React.createElement(
                    'span',
                    { key: index, className: 'tech-tag' },
                    tech
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'project-links' },
            project.github && React.createElement(
                'a',
                { 
                    href: project.github, 
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'project-link'
                },
                React.createElement('i', { className: 'fab fa-github' }),
                'Code'
            ),
            project.demo && React.createElement(
                'a',
                { 
                    href: project.demo, 
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'project-link'
                },
                React.createElement('i', { className: 'fas fa-external-link-alt' }),
                'Démo'
            )
        )
    );
}

// Composant ProjectsList
function ProjectsList({ projects }) {
    return React.createElement(
        'div',
        { className: 'projects-grid' },
        projects.map((project, index) =>
            React.createElement(ProjectCard, {
                key: index,
                project: project
            })
        )
    );
}

// Données des projets
const projects = [
    {
        title: 'FAKHAR SHOP',
        description: 'Plateforme de commerce électronique moderne avec interface utilisateur intuitive. Intégration des fonctionnalités de panier, de gestion des produits et de checkout.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/abdellaheddamani18-ai/PROJET-FAKHAR-.SHOP.git',
        demo: '[]'
    },
    {
        title: 'Firewall de Détection d\'Attaques Réseau',
        description: 'Système de détection d\'intrusions en temps réel capable d\'identifier et journaliser les attaques réseau (Man-in-the-Middle par ARP Spoofing, DoS, scan de ports, brute force). Le projet intègre un moteur de capture de paquets, une API REST avec WebSocket et un dashboard interactif affichant les alertes en temps réel.',
        technologies: ['Python', 'Scapy', 'Flask', 'WebSocket', 'React.js'],
        github: 'https://github.com/MADMIX55',
        demo: '[À ajouter]'
    },
    {
        title: 'Jeu 2D en C++ Orienté Objet',
        description: 'Conception et développement d\'un jeu vidéo 2D en C++ en appliquant les principes de la programmation orientée objet (héritage, encapsulation, polymorphisme). Le projet démontre une maîtrise de l\'architecture logicielle, de la gestion mémoire et de la boucle de jeu.',
        technologies: ['C++', 'POO', 'SFML'],
        github: 'https://github.com/ouaalane/VoidDefender.git',
        demo: '[À ajouter]'
    },
    {
        title: 'Projet de Sécurité Offensive — Analyse de Vecteurs d\'Attaque',
        description: 'Étude et simulation d\'un vecteur d\'attaque par ingénierie sociale sur un environnement personnel contrôlé, en utilisant Metasploit Framework. Ce projet a permis de comprendre les mécanismes d\'exploitation des permissions mobiles et de concevoir des contre-mesures adaptées.',
        technologies: ['Metasploit', 'Ingénierie Sociale', 'Android'],
        github: 'https://github.com/MADMIX55',
        demo: '[À ajouter]'
    }
];

// Monter les composants React
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('projects-container');
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(ProjectsList, { projects: projects }));
    }
});

// ============================================
// UTILITAIRES
// ============================================

// Logger les infos
console.log('%c✨ CV Personnel Interactif Chargé ✨', 
    'color: #00d9ff; font-size: 14px; font-weight: bold;');
console.log('%cHTML5 + CSS3 + jQuery + React = ', 
    'color: #ff006e; font-size: 12px;');
