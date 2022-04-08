
// const title = response.potentiallyMaliciuesInpu

const root = ReactDOM.createRoot(
  document.getElementById('teste')
);
function tick() {
  const element = (
    <div>
      <h1>Primeira aplicação em ReactJS</h1>
      <h2>Horário Atual {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

ReactDOM.render(
  <input type="text" id="testenome" class="form form-control " placeholder="Digite o seu nome"></input>,
  document.querySelector('.input')
);

ReactDOM.render(
  <input type="text" id="idade" class="form form-control " placeholder="Digite a sua idade"></input>,
  document.querySelector('.idade')
)

ReactDOM.render(
  <button id="enviar" class="btn btn-primary">Enviar</button>,
  document.getElementById('btn')
);



function exibeNome(){

  
  document.getElementById('enviar').addEventListener('click', function(){
    let nome = document.getElementById('testenome').value;
    let idade = document.getElementById('idade').value;
    ReactDOM.render(
      <h1>Olá, {nome} você tem {idade} anos, ou seja, nasceu em {new Date().getFullYear() - idade}</h1>,
      document.getElementById('nome')
    );

  })

}

exibeNome()