// Funcionalidade do carrossel de depoimentos
document.addEventListener('DOMContentLoaded', () => {
    console.log('Carrossel inicializado');
    
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;
    
    // Função para mostrar um depoimento específico
    function showTestimonial(index) {
        // Esconde todos os depoimentos
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        // Remove a classe active de todos os dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Mostra o depoimento atual
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Atualiza o índice atual
        currentIndex = index;
    }
    
    // Função para avançar para o próximo depoimento
    function nextTestimonial() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= testimonials.length) {
            nextIndex = 0;
        }
        showTestimonial(nextIndex);
    }
    
    // Adiciona evento de clique aos dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            resetInterval();
        });
    });
    
    // Função para reiniciar o intervalo
    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextTestimonial, 5000);
    }
    
    // Inicia o carrossel automático
    resetInterval();
});