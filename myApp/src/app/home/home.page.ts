import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navegacao: NavController) {}

  ngOnInit() {
  }
  public resultado: String = ''
  public precoGasolina: string = '';
  public precoAlcool: string = '';
  
  public calcular(): void{
      let valorAlcool: number = parseFloat(this.precoAlcool)
     
      let valorGasolina: number = parseFloat(this.precoGasolina)
      
      let result_divisao = valorAlcool / valorGasolina
      
    if(this.precoAlcool != '' && this.precoGasolina != ''){
      if(result_divisao < 0.7){
        this.resultado = 'É melhor usar Álcool'
      }else{
        this.resultado = 'É melhor usar Gasolina!!!'
      }
    }else{
      this.resultado = 'Preços não preenchidos!!!'
    }
      

  }

  /*
  public resultado: String = '';

  public titulo: String = 'Meu título'

  public imagemRandom: String = 'https://images.unsplash.com/photo-1674167526280-8ee04e4a473c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjIxMjc1Ng&ixlib=rb-4.0.3&q=80&w=1080'

  public imagem: String = '../assets/icone-celular.png'
  pesquisa: String = ''
  

  public recuperar(): void{
    this.resultado = this.pesquisa
  }

  public abrirLista(): void {
    this.navegacao.navigateForward('lista')
  } 

  public abrirBotoes(): void {
    this.navegacao.navigateForward('botoes')
  } 

  public atualiza(): void {
      this.titulo = 'Texto alterado!!!'
  }

  public acao(): void {
      this.titulo = 'Botão clickado!!!'
  }*/

}
