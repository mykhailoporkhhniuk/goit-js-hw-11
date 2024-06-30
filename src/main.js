import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImage } from "./js/pixabay-api";
import { imageTemplate } from "./js/render-functions";

const formEL = document.querySelector('.search-form');
const inputEl = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
export const ulElem = document.querySelector('.gallery');

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

formEL.addEventListener('submit', e => {
    e.preventDefault();
    const userImg = inputEl.value.trim();
    showLoader();
    getImage(userImg)
        .then(({ hits }) => {
            if (hits.length === 0) {
                iziToast.error({
                    title: '',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    maxWidth: '432px',
                    color: '#ef4040',
                })
                ulElem.innerHTML = '';
                hideLoader();
                formEL.reset();
                return;
            }
            imageTemplate(hits);
            hideLoader();
            formEL.reset();
        }).catch(err => { console.log(err); });
})

