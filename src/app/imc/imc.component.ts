import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso: any = '';
  altura: any = '';
  imc: number | null = null;
  classificacao: string = '';
  imagem: string = ''; 

  calcularIMC(): void {
    const pesoConvertido = parseFloat(this.peso);
    const alturaConvertida = parseFloat(this.altura);

    if (!isNaN(pesoConvertido) && !isNaN(alturaConvertida) && pesoConvertido > 0 && alturaConvertida > 0) {
      this.imc = pesoConvertido / (alturaConvertida * alturaConvertida);
      this.definirClassificacao();
    } else {
      this.imc = null;
      this.classificacao = 'Valores inválidos!';
    }
  }

  definirClassificacao(): void {
    if (this.imc === null) return;

    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';
      this.imagem = 'assets/img/abaixo-peso.png';
    }
    else if (this.imc < 24.9) {
      this.classificacao = 'Peso normal';
      this.imagem = 'assets/img/peso-normal.png';
    } else if (this.imc < 29.9) {
      this.classificacao = 'Sobrepeso';
      this.imagem = 'assets/img/sobrepeso.png';
    } else if (this.imc < 34.9) {
      this.classificacao = 'Obesidade Grau I';
      this.imagem = 'assets/img/obesidade1.png';
    } else if (this.imc < 39.9) {
      this.classificacao = 'Obesidade Grau II';
      this.imagem = 'assets/img/obesidade2.png';
    } else {
      this.classificacao = 'Obesidade Grau III';
      this.imagem = 'assets/img/obesidade3.png';
    }
  }
}
