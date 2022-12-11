let content = document.querySelector('#content');
let container = document.querySelector('#container');
let modal = document.querySelector('#modal');
let btnClose = document.createElement('button');
btnClose.classList.add('btnClose');
let search = document.querySelector('#search');
let searchValue = document.querySelector('#searchValue');
let backList = document.createElement('button');
backList.textContent = "Back to List";

async function getFetch() {
  for (let i = 1; i < 152; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let getData = await response.json();

    // Boîte contenant : Nom, l"id et l'image 
    let boxNameId = document.createElement('div')
    boxNameId.classList.add('boxNameId');
    let image = document.createElement('img');
    image.classList.add('pokeImage');
    image.src = getData.sprites.front_default;
    textId = getData.id;

    let spanImg = document.createElement('img');
    spanImg.classList.add('spanImg');
    spanImg.src = "./public/img/pokeball.svg";

    if (textId <= 9) {
      textId = "00" + getData.id;
    } else if (textId <= 99) {
      textId = "0" + getData.id;
    } else if (textId <= 999) {
      textId = getData.id;
    }

    let titleName = document.createElement('h2');
    titleName.classList.add('titleName');
    titleName = getData.name;

    boxNameId.innerHTML = `<span class="idSpan"> #${textId} </span><h2 class="titleName"> ${getData.name} </h2>`;
    boxNameId.prepend(spanImg);
    boxNameId.append(image);

    // Boîtes pour le Type de Pokémon
    let typeBox = document.createElement('section');
    typeBox.classList.add('typeBox');
    let type1 = document.createElement('div');
    type1.classList.add('type1');
    let type2 = document.createElement('div');
    type2.classList.add('type2');
    let texType1 = document.createElement('p');
    let texType2 = document.createElement('p');

    texType1 = getData.types[0].type.name;

    // Si textType2 n'a pas de valeurs, alors Retourne : "none"
    texType2 = getData.types[1];
    if (!texType2 == false) {
      texType2 = getData.types[1].type.name;
    } else if (texType2 == undefined) {
      texType2 = "None";
    }

    image.after(typeBox);
    typeBox.append(type1, type2);
    type1.append(texType1);
    type2.append(texType2);

    // Couleurs en fonction du Type de pokémon
    // Le type prendra sa couleur si = True . Sinon prend sa couleur de base 
    texType1 == "fire" ? type1.style.backgroundColor = "#f57d31" : null;
    texType2 == "fire" ? type2.style.backgroundColor = "#f57d31" : null;
    texType1 == "grass" ? type1.style.backgroundColor = "#74cb48" : null;
    texType2 == "grass" ? type2.style.backgroundColor = "#74cb48" : null;
    texType1 == "electric" ? type1.style.backgroundColor = "#f9cf30" : null;
    texType2 == "electric" ? type2.style.backgroundColor = "#f9cf30" : null;
    texType1 == "bug" ? type1.style.backgroundColor = "#a7b723" : null;
    texType2 == "bug" ? type2.style.backgroundColor = "#a7b723" : null;
    texType1 == "water" ? type1.style.backgroundColor = "#6493eb" : null;
    texType2 == "water" ? type2.style.backgroundColor = "#6493eb" : null;
    texType1 == "ice" ? type1.style.backgroundColor = "#9ad6df" : null;
    texType2 == "ice" ? type2.style.backgroundColor = "#9ad6df" : null;
    texType1 == "psychic" ? type1.style.backgroundColor = "#fb5584" : null;
    texType2 == "psychic" ? type2.style.backgroundColor = "#fb5584" : null;
    texType1 == "steel" ? type1.style.backgroundColor = "#b7b9d0" : null;
    texType2 == "steel" ? type2.style.backgroundColor = "#b7b9d0" : null;
    texType1 == "ghost" ? type1.style.backgroundColor = "#70559b" : null;
    texType2 == "ghost" ? type2.style.backgroundColor = "#70559b" : null;
    texType1 == "rock" ? type1.style.backgroundColor = "#b69e31" : null;
    texType2 == "rock" ? type2.style.backgroundColor = "#b69e31" : null;
    texType1 == "poison" ? type1.style.backgroundColor = "#a43e9e" : null;
    texType2 == "poison" ? type2.style.backgroundColor = "#a43e9e" : null;
    texType1 == "ground" ? type1.style.backgroundColor = "#dec16b" : null;
    texType2 == "ground" ? type2.style.backgroundColor = "#dec16b" : null;
    texType1 == "flying" ? type1.style.backgroundColor = "#a891ec" : null;
    texType2 == "flying" ? type2.style.backgroundColor = "#a891ec" : null;
    texType1 == "normal" ? type1.style.backgroundColor = "#aaa67f" : null;
    texType2 == "normal" ? type2.style.backgroundColor = "#aaa67f" : null;
    texType1 == "dragon" ? type1.style.backgroundColor = "#7037ff" : null;
    texType2 == "dragon" ? type2.style.backgroundColor = "#7037ff" : null;
    texType1 == "dark" ? type1.style.backgroundColor = "#75574c" : null;
    texType2 == "dark" ? type2.style.backgroundColor = "#75574c" : null;
    texType1 == "fairy" ? type1.style.backgroundColor = "#e69eac" : null;
    texType2 == "fairy" ? type2.style.backgroundColor = "#e69eac" : null;
    texType1 == "fighting" ? type1.style.backgroundColor = "#c12239" : null;
    texType2 == "fighting" ? type2.style.backgroundColor = "#c12239" : null;

    // Création du conteneur : About. Qui aura  les Caractéristiques + la Description
    let about = document.createElement('div');
    about.classList.add('about');
    about.innerHTML = `<h3 class="textAbout" style="color:grey">About</h3> `;
    typeBox.after(about);

    // Caractéristiques 
    // Poids Variables
    let contentStats = document.createElement('div');
    let weightBox = document.createElement('div');
    weightBox.style.borderRight = "1px solid grey"
    weightBox.style.paddingRight = "7%";
    let weightInfos = document.createElement('p');
    let textHeight = document.createElement('p');

    // Taille Variables
    let height = document.createElement('div');
    height.style.borderRight = "1px solid grey";
    height.style.paddingRight = "7%";
    let heightInfos = document.createElement('p');
    let heightText = document.createElement('p');

    // Ability Variables
    let ability = document.createElement('div');
    ability.style.alignSelf = "self-end";
    ability.style.textAlign = "center";
    ability.style.textAlign = "center";
    let ability1 = document.createElement('p');
    let ability2 = document.createElement('p');
    let abilityInfos = document.createElement('p');

    // Dans "contentStats" aura pour enfant Les caractéristiques
    contentStats.append(weightBox, height, ability);
    contentStats.classList.add('contentStats');

    // Poids
    weightBox.append(weightInfos, textHeight)
    about.append(contentStats);
    weightBox.append(weightInfos, textHeight);
    weightInfos.innerHTML = getData.weight / 1000 + " kg";
    textHeight.innerHTML = `<p style="color:grey"> weight</p>`;

    // Taille 
    height.append(heightInfos, heightText);
    heightInfos.innerHTML = getData.height / 10 + " m";
    heightText.innerHTML = `<p style="color:grey"> height</p>`;

    // Abilities
    ability.append(ability1, ability2, abilityInfos);
    ability1.innerHTML = getData.abilities[0].ability.name;
    ability2.innerHTML = getData.moves[0].move.name;
    abilityInfos.innerHTML = `<span style="color:grey; -webkit-text-stroke: thin;">Moves</span>`;
    ability1.style.margin = "auto";
    ability2.style.margin = "auto";
    abilityInfos.style.marginTop = "auto";

    // Get : API , des descriptions du pokémon
    let typeData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    let getType = await typeData.json();
    let description = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = getType.flavor_text_entries[8].flavor_text;
    contentStats.after(description);

    // Boîte qui va contenir la partie : Base Stats
    let boxMainStats = document.createElement('article');
    boxMainStats.classList.add('boxMainStats');
    // Titre : Base Stats 
    let titleStats = document.createElement('h3');
    titleStats.textContent = "Base Stats";
    // Boîte qui contiendra les Div : Flex 
    let boxStats = document.createElement('section');
    boxStats.classList.add('boxStats');
    // Div qui contiendra : le Texte des stats 
    let boxStatsName = document.createElement('div');
    boxStatsName.classList.add('boxStatsName');
    // Div qui contiendra : la Valeur des stats 
    let boxStatsValue = document.createElement('div');
    boxStatsValue.classList.add('boxStatsValue');
    // Div qui contiendra : la barre des stats 
    let boxStatsBar = document.createElement('div');
    boxStatsBar.classList.add('boxStatsBar');

    about.after(boxMainStats);
    boxMainStats.append(titleStats, boxStats);
    boxStats.append(boxStatsName, boxStatsValue, boxStatsBar);

    // Je crée un Tableau pour remplacer "getData.stats[j].stat.name"
    let arrName = ["Hp", "Atk", "Def", "Satk", "SDef", "Spd"];

    for (let j = 0; j < 6; j++) {
      // Crée une Div à chaque itération qui sera un span
      let textName = document.createElement('span');
      textName.classList.add('textName');
      // Je remplace "getData.stats[j].stat.name" pour raccourcir leurs noms en appelant mon Array au-dessus
      textName.textContent = arrName[j];
      // Je mets toutes les span : textName dans la 1ère <div> boxStatsName
      boxStatsName.append(textName);

      // De 0 à 6 j'appelle les stats différents de getData.stats[j] pour chaque Pokémon
      // Repère :// 0 == HP // 1 == Attack // 2 == Defense // 3 == Satk // 4 == SDef // 5 == Speed 
      let textValue = document.createElement('span'); // Crée une Div à chaque itération qui sera un span
      textValue.classList.add('textValue')

      if (getData.stats[j].base_stat < 100) {
        textValue.textContent = "0" + getData.stats[j].base_stat;
      } else if (getData.stats[j].base_stat < 1000) {
        textValue.textContent = getData.stats[j].base_stat;
      }

      // Je mets toutes les span : textValue dans la 2ème <div> boxStatsValue
      boxStatsValue.append(textValue);

      let barStatsColor = ["#7DBC6F", "#BC806F", "#6F97BC", "#BCA36F", "#BBBC6F", "#6FBCAF"];
      let barStats = document.createElement('span');
      barStats.classList.add('barStats');
      // Progression de la Barre 
      barStats.style.width = getData.stats[j].base_stat * 0.5 + "px";
      barStats.style.backgroundColor = barStatsColor[j];
      boxStatsBar.append(barStats);
    }

    // PARTIE : DU MODAL
    boxNameId.addEventListener('click', () => {
      modal.showModal();
      modal.prepend(btnClose);
      modal.append(boxNameId);
      modal.classList.toggle('modalTransform');
      boxNameId.style.cursor = "auto";

      boxNameId.classList.toggle('modalTitleName');
      image.classList.toggle('modalPokeImage');
      boxNameId.classList.toggle('modalBoxNameId');
      spanImg.classList.toggle('modalSpanImg');
      typeBox.classList.toggle('modaltypeBox');
      about.classList.toggle('modalAbout');
      description.classList.toggle('modalDescription');
      contentStats.classList.toggle('modalContentStats');
      boxMainStats.classList.toggle('modalBoxMainStats');
    })

    // FERMETUR DU MODAL
    btnClose.addEventListener('click', (e) => {
      boxNameId.classList.remove('modalTitleName');
      image.classList.remove('modalPokeImage');
      boxNameId.classList.remove('modalBoxNameId');
      spanImg.classList.remove('modalSpanImg');
      typeBox.classList.remove('modaltypeBox');
      about.classList.remove('modalAbout');
      description.classList.remove('modalDescription');
      contentStats.classList.remove('modalContentStats');
      boxMainStats.classList.remove('modalBoxMainStats');
      boxNameId.style.cursor = "pointer";

      modal.classList.remove('modalTransform');
      container.append(boxNameId);
      modal.close();
    })


    searchValue.addEventListener('click', () => {
      let topPage = document.querySelector('#top-page');
      if (search.value == titleName) {
        backList.classList.add('backList');
        backList.style.visibility = "visible";
        boxNameId.classList.add('searchCard');
        boxNameId.style.display = "flex";
        topPage.after(backList);
      } else {
        boxNameId.style.display = "none";
      }
    })

    backList.addEventListener('click', () => {
      boxNameId.style.display = "block";
      backList.style.visibility = "hidden";
    })

    // Conteneur principale qui contiendra tous les noeuds du script
    container.append(boxNameId);
  }
}

getFetch();




// Abra