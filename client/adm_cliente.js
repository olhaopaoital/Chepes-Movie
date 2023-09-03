function toggleSortIcon(sortImg) {
    if (sortImg.src.includes('arrow-fat-up.svg')) {
        sortImg.src = './icons/arrow-fat-down.svg';
    } else if (sortImg.src.includes('arrow-fat-down.svg')) {
        sortImg.src = './icons/arrow-fat-up.svg';
    }
}