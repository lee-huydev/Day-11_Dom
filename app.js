const divBtn = document.querySelector('#btn');
const insert = document.querySelector('.insert-js');
const del = document.querySelector('.delete-js');
const chColor = document.querySelector('.color-js');
const btnModal = document.querySelector('.modal-js');
const circle = document.querySelector('.circle-js');
const tagName = document.getElementsByTagName('div');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-js');
// Insert
insert.onclick = () => {
   const div = document.createElement('div');
   divBtn.parentNode.appendChild(div);
};
// Delete
del.onclick = () => {
   for (let index in tagName) {
      if (index > 4) {
         divBtn.parentNode.removeChild(tagName[index]);
      }
   }
};
//Doi mau
chColor.onclick = () => {
   chColor.classList.toggle('color-5');
   if (chColor.innerHTML === 'Đổi chử') {
      chColor.innerHTML = 'Technology';
   } else {
      chColor.innerHTML = 'Đổi chử';
   }
};
// Modal
btnModal.onclick = () => {
   modal.classList.add('modal-display');
};
closeModal.onclick = () => {
   modal.classList.remove('modal-display');
};
// Doi hinh

circle.onclick = () => {
   circle.classList.toggle('active-btn');
};
