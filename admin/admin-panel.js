// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!sessionStorage.getItem('admin_authenticated')) {
        window.location.href = 'index.html';
        return;
    }
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        sessionStorage.removeItem('admin_authenticated');
        window.location.href = 'index.html';
    });
    
    // Default content structure
    const defaultContent = {
        site: {
            name: 'Olivi',
            title: 'Psicóloga'
        },
        hero: [
            {
                title: 'Um espaço seguro para o seu bem-estar',
                subtitle: 'Aqui você encontra acolhimento e compreensão para sua jornada de autoconhecimento',
                image: 'assets/imgs/placeholder-hero1.svg'
            },
            {
                title: 'Cuidando da sua saúde mental com carinho',
                subtitle: 'Juntos podemos construir um caminho mais leve e equilibrado',
                image: 'assets/imgs/placeholder-hero2.svg'
            },
            {
                title: 'Transformando desafios em crescimento',
                subtitle: 'Cada sessão é um passo em direção a uma versão mais plena de você',
                image: 'assets/imgs/placeholder-hero3.svg'
            }
        ],
        about: {
            text: 'Sou psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC), com experiência em atendimento individual para adolescentes e adultos.',
            crp: '00/000000',
            education: 'Graduação em Psicologia pela Universidade Federal de Santa Catarina (UFSC)',
            specializations: 'Especialização em Terapia Cognitivo-Comportamental\nFormação em Mindfulness\nTécnicas de Relaxamento e Controle de Ansiedade'
        },
        contact: {
            whatsapp: '5548999999999',
            whatsappText: 'Olá! Gostaria de agendar uma consulta.',
            instagram: 'olivipsicologa'
        },
        testimonials: [
            {
                name: 'Maria Silva',
                text: 'A Olivi me ajudou a superar um momento muito difícil. Sua abordagem é carinhosa e profissional.',
                image: 'assets/imgs/placeholder-testimonial1.svg'
            },
            {
                name: 'João Santos',
                text: 'Excelente profissional! Me sinto muito mais confiante após nossos encontros.',
                image: 'assets/imgs/placeholder-testimonial2.svg'
            },
            {
                name: 'Ana Costa',
                text: 'Recomendo muito! A terapia com a Olivi mudou minha perspectiva sobre muitas coisas.',
                image: 'assets/imgs/placeholder-testimonial3.svg'
            }
        ],
        quotes: [
            {
                text: 'O curioso paradoxo é que, quando me aceito como sou, então posso mudar.',
                author: 'Carl Rogers'
            },
            {
                text: 'Tudo o que é humano, me interessa.',
                author: 'Terêncio'
            },
            {
                text: 'Respirar também é um ato de coragem.',
                author: 'autor desconhecido'
            },
            {
                text: 'A vida não é sobre se encontrar. A vida é sobre se criar.',
                author: 'George Bernard Shaw'
            },
            {
                text: 'Seja gentil, pois todas as pessoas que você encontra estão lutando uma batalha difícil.',
                author: 'Platão'
            }
        ],
        faq: [
            {
                question: 'Como é a primeira sessão?',
                answer: 'É completamente normal sentir ansiedade ou curiosidade sobre a primeira sessão. A terapia é um espaço seu, onde você pode falar sobre o que está sentindo sem julgamentos. Começamos sempre no seu ritmo, com muito acolhimento e compreensão.'
            },
            {
                question: 'Você atende online?',
                answer: 'Sim! Ofereço atendimento tanto online quanto presencial. As sessões online são realizadas por videochamada em plataforma segura e têm a mesma eficácia que as sessões presenciais.'
            },
            {
                question: 'O que é a TCC?',
                answer: 'A Terapia Cognitivo-Comportamental (TCC) é uma abordagem que nos ajuda a compreender como nossos pensamentos, sentimentos e comportamentos estão conectados. É uma terapia prática e eficaz, com técnicas validadas cientificamente.'
            }
        ],
        colors: {
            primary: '#D4C5B9',
            secondary: '#E8D5C4',
            accent: '#F0E6D6'
        }
    };
    
    let currentContent = { ...defaultContent };
    
    // Initialize the form
    function initializeForm() {
        loadContent();
        setupEventListeners();
    }
    
    // Load content from localStorage or use defaults
    function loadContent() {
        const savedContent = localStorage.getItem('siteContent');
        if (savedContent) {
            currentContent = JSON.parse(savedContent);
        }
        
        populateForm();
    }
    
    // Populate form with current content
    function populateForm() {
        // Site settings
        document.getElementById('site-name').value = currentContent.site.name;
        document.getElementById('site-title').value = currentContent.site.title;
        
        // About section
        document.getElementById('about-text').value = currentContent.about.text;
        document.getElementById('crp-number').value = currentContent.about.crp;
        document.getElementById('education').value = currentContent.about.education;
        document.getElementById('specializations').value = currentContent.about.specializations;
        
        // Contact section
        document.getElementById('whatsapp-number').value = currentContent.contact.whatsapp;
        document.getElementById('whatsapp-text').value = currentContent.contact.whatsappText;
        document.getElementById('instagram-username').value = currentContent.contact.instagram;
        
        // Colors
        document.getElementById('primary-color').value = currentContent.colors.primary;
        document.getElementById('secondary-color').value = currentContent.colors.secondary;
        document.getElementById('accent-color').value = currentContent.colors.accent;
        
        // Populate dynamic sections
        populateCarousel();
        populateTestimonials();
        populateQuotes();
        populateFAQ();
    }
    
    // Populate carousel items
    function populateCarousel() {
        const container = document.getElementById('carousel-items');
        container.innerHTML = '';
        
        currentContent.hero.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'carousel-item';
            itemDiv.innerHTML = `
                <div class="item-header">
                    <h3>Slide ${index + 1}</h3>
                    <button type="button" class="remove-item" onclick="removeCarouselItem(${index})">Remover</button>
                </div>
                <div class="form-group">
                    <label>Título:</label>
                    <input type="text" data-field="title" data-index="${index}" value="${item.title}">
                </div>
                <div class="form-group">
                    <label>Subtítulo:</label>
                    <input type="text" data-field="subtitle" data-index="${index}" value="${item.subtitle}">
                </div>
                <div class="form-group">
                    <label>Imagem (URL):</label>
                    <input type="text" data-field="image" data-index="${index}" value="${item.image}">
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }
    
    // Populate testimonials
    function populateTestimonials() {
        const container = document.getElementById('testimonials-items');
        container.innerHTML = '';
        
        currentContent.testimonials.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'testimonial-item';
            itemDiv.innerHTML = `
                <div class="item-header">
                    <h3>Depoimento ${index + 1}</h3>
                    <button type="button" class="remove-item" onclick="removeTestimonial(${index})">Remover</button>
                </div>
                <div class="form-group">
                    <label>Nome:</label>
                    <input type="text" data-field="name" data-index="${index}" value="${item.name}">
                </div>
                <div class="form-group">
                    <label>Depoimento:</label>
                    <textarea data-field="text" data-index="${index}" rows="3">${item.text}</textarea>
                </div>
                <div class="form-group">
                    <label>Imagem (URL):</label>
                    <input type="text" data-field="image" data-index="${index}" value="${item.image}">
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }
    
    // Populate quotes
    function populateQuotes() {
        const container = document.getElementById('quotes-items');
        container.innerHTML = '';
        
        currentContent.quotes.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'quote-item';
            itemDiv.innerHTML = `
                <div class="item-header">
                    <h3>Frase ${index + 1}</h3>
                    <button type="button" class="remove-item" onclick="removeQuote(${index})">Remover</button>
                </div>
                <div class="form-group">
                    <label>Frase:</label>
                    <textarea data-field="text" data-index="${index}" rows="2">${item.text}</textarea>
                </div>
                <div class="form-group">
                    <label>Autor:</label>
                    <input type="text" data-field="author" data-index="${index}" value="${item.author}">
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }
    
    // Populate FAQ
    function populateFAQ() {
        const container = document.getElementById('faq-items');
        container.innerHTML = '';
        
        currentContent.faq.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'faq-item';
            itemDiv.innerHTML = `
                <div class="item-header">
                    <h3>FAQ ${index + 1}</h3>
                    <button type="button" class="remove-item" onclick="removeFAQ(${index})">Remover</button>
                </div>
                <div class="form-group">
                    <label>Pergunta:</label>
                    <input type="text" data-field="question" data-index="${index}" value="${item.question}">
                </div>
                <div class="form-group">
                    <label>Resposta:</label>
                    <textarea data-field="answer" data-index="${index}" rows="3">${item.answer}</textarea>
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Add item buttons
        document.getElementById('add-carousel-item').addEventListener('click', addCarouselItem);
        document.getElementById('add-testimonial').addEventListener('click', addTestimonial);
        document.getElementById('add-quote').addEventListener('click', addQuote);
        document.getElementById('add-faq').addEventListener('click', addFAQ);
        
        // Save button
        document.getElementById('save-btn').addEventListener('click', saveContent);
        
        // Auto-save on input change
        document.addEventListener('input', function(e) {
            if (e.target.matches('input, textarea')) {
                updateContent();
            }
        });
    }
    
    // Add new carousel item
    function addCarouselItem() {
        currentContent.hero.push({
            title: 'Novo título',
            subtitle: 'Novo subtítulo',
            image: 'assets/imgs/placeholder-hero1.svg'
        });
        populateCarousel();
    }
    
    // Add new testimonial
    function addTestimonial() {
        currentContent.testimonials.push({
            name: 'Nome do cliente',
            text: 'Depoimento aqui...',
            image: 'assets/imgs/placeholder-testimonial1.svg'
        });
        populateTestimonials();
    }
    
    // Add new quote
    function addQuote() {
        currentContent.quotes.push({
            text: 'Nova frase inspiradora...',
            author: 'Autor'
        });
        populateQuotes();
    }
    
    // Add new FAQ
    function addFAQ() {
        currentContent.faq.push({
            question: 'Nova pergunta?',
            answer: 'Nova resposta...'
        });
        populateFAQ();
    }
    
    // Remove functions (global scope)
    window.removeCarouselItem = function(index) {
        currentContent.hero.splice(index, 1);
        populateCarousel();
    };
    
    window.removeTestimonial = function(index) {
        currentContent.testimonials.splice(index, 1);
        populateTestimonials();
    };
    
    window.removeQuote = function(index) {
        currentContent.quotes.splice(index, 1);
        populateQuotes();
    };
    
    window.removeFAQ = function(index) {
        currentContent.faq.splice(index, 1);
        populateFAQ();
    };
    
    // Update content from form
    function updateContent() {
        // Site settings
        currentContent.site.name = document.getElementById('site-name').value;
        currentContent.site.title = document.getElementById('site-title').value;
        
        // About section
        currentContent.about.text = document.getElementById('about-text').value;
        currentContent.about.crp = document.getElementById('crp-number').value;
        currentContent.about.education = document.getElementById('education').value;
        currentContent.about.specializations = document.getElementById('specializations').value;
        
        // Contact section
        currentContent.contact.whatsapp = document.getElementById('whatsapp-number').value;
        currentContent.contact.whatsappText = document.getElementById('whatsapp-text').value;
        currentContent.contact.instagram = document.getElementById('instagram-username').value;
        
        // Colors
        currentContent.colors.primary = document.getElementById('primary-color').value;
        currentContent.colors.secondary = document.getElementById('secondary-color').value;
        currentContent.colors.accent = document.getElementById('accent-color').value;
        
        // Update dynamic sections
        updateDynamicSections();
        
        // Save to localStorage
        localStorage.setItem('siteContent', JSON.stringify(currentContent));
    }
    
    // Update dynamic sections
    function updateDynamicSections() {
        // Update carousel
        const carouselInputs = document.querySelectorAll('#carousel-items input, #carousel-items textarea');
        carouselInputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const field = input.dataset.field;
            if (currentContent.hero[index]) {
                currentContent.hero[index][field] = input.value;
            }
        });
        
        // Update testimonials
        const testimonialInputs = document.querySelectorAll('#testimonials-items input, #testimonials-items textarea');
        testimonialInputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const field = input.dataset.field;
            if (currentContent.testimonials[index]) {
                currentContent.testimonials[index][field] = input.value;
            }
        });
        
        // Update quotes
        const quoteInputs = document.querySelectorAll('#quotes-items input, #quotes-items textarea');
        quoteInputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const field = input.dataset.field;
            if (currentContent.quotes[index]) {
                currentContent.quotes[index][field] = input.value;
            }
        });
        
        // Update FAQ
        const faqInputs = document.querySelectorAll('#faq-items input, #faq-items textarea');
        faqInputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const field = input.dataset.field;
            if (currentContent.faq[index]) {
                currentContent.faq[index][field] = input.value;
            }
        });
    }
    
    // Save content to GitHub
    function saveContent() {
        const token = document.getElementById('github-token').value;
        const repo = document.getElementById('github-repo').value;
        
        if (!token || !repo) {
            showMessage('Por favor, configure o token do GitHub e o repositório.', 'error');
            return;
        }
        
        updateContent();
        
        const saveBtn = document.getElementById('save-btn');
        saveBtn.disabled = true;
        saveBtn.textContent = 'Salvando...';
        
        // Use GitHub API to save content
        saveToGitHub(currentContent, token, repo)
            .then(() => {
                showMessage('Conteúdo salvo com sucesso! O site será atualizado automaticamente.', 'success');
            })
            .catch(error => {
                showMessage('Erro ao salvar: ' + error.message, 'error');
            })
            .finally(() => {
                saveBtn.disabled = false;
                saveBtn.textContent = 'Salvar Alterações';
            });
    }
    
    // Show message
    function showMessage(message, type) {
        const messageDiv = document.getElementById('save-message');
        messageDiv.textContent = message;
        messageDiv.className = `save-message ${type}`;
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
    
    // Initialize
    initializeForm();
});