function Player(hp)
{
    hp = 2;
    this.element = document.createElement("div");
    this.element.innerHTML = "hp: " + hp + "/10";
    
    main.appendChild(this.element);
}