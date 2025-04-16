// Arquivo principal que inicializa todas as funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    console.log('E-commerce Pro - Site carregado com sucesso!');
    
    // Inicialização de animações ao scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            if (
                (elementBottomPosition >= windowTopPosition) && 
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animated');
            }
        });
    }
    
    // Verificar elementos na viewport ao carregar a página
    checkIfInView();
    
    // Verificar elementos na viewport ao rolar a página
    window.addEventListener('scroll', checkIfInView);
});