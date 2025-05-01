(function () {
    const chatConfig = {
        logo: 'https://media.discordapp.net/attachments/1324404219956166656/1367601463928422482/brand-logo.png?ex=68152d9d&is=6813dc1d&hm=b5a0a1a45a808ec626833d837661cb872ee0514339986329b0df216f811776c8&=&format=webp&quality=lossless',
        position: 'left', // left,right,top,bottom
    }

    // Prefix Logo Side //
    const prefixSelect = document.querySelector('.prefix')
    prefixSelect.innerHTML = ""; // reset
    prefixSelect.style.backgroundImage = `url(${chatConfig.logo})`;

    // Chat Position //
    const chat = document.querySelector('.chat-input')
    chat.style.top = 'inherit';
    chat.style.right = 'inherit';
    chat.style.bottom = 'inherit';
    chat.style.left = 'inherit';

    switch (chatConfig.position) {
        case 'left':
            chat.style.top = '30%';
            chat.style.left = '0.8%';
            break;
        case 'right':
            chat.style.top = '30%';
            chat.style.right = '0.8%';
            break;
        case 'top':
            chat.style.top = '5%';
            chat.style.left = '40%';
            break;
        case 'bottom':
            chat.style.bottom = '5%';
            chat.style.left = '40%';
            break;
        default:
            console.log('Invalid position');
    }


})();