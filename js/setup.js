'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0 ,0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRamdomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var wizards = [];

var createWizard = function () {
  return {
    name: getRamdomValue(NAMES) + ' ' + getRamdomValue(SURNAMES),
    coatColor: getRamdomValue(COAT_COLOR),
    eyesColor: getRamdomValue(EYES_COLOR)
  };
};

for (var i = 0; i <= 3; i++) {
  wizards.push(createWizard());
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarList.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');

