
export const ViewLogin = () => {
    const viewLg = document.querySelector('.header__login');
    viewLg.classList.add('togleView');
}

export const ShowLogin = () => {
    const showLg = document.querySelector('.header__login');
    showLg.classList.add('togleShow');
    showLg.classList.remove('togleView');
    showLg.classList.remove('togleShow');
}

export const MenuClick = () => {
    const container__menu = document.querySelector('.container__menu');
    const container = document.querySelector('.menu_admin');

    container__menu.classList.toggle('active');
    container.classList.toggle('active');
}