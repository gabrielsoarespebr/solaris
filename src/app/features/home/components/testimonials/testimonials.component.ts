import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonialText: string = '';
  testimonialAuthor: string = '';
  testimonialImage: string = '';

  testimonialList = [
    {
      text: 'Minha vida mudou para melhor depois do Instituto Solaris. Sempre fui muito tímida, mas depois que entrei nessa escola na 6ª série do Ensino Fundamental, encontrei um ambiente acolheador e passei a interagir mais. Comecei a aproveitar mais os momentos com minha família e a descobrir novos hobbies.',
      author: 'Mariana, estudante do 2º ano do Ensino Médio.',
      image: './assets/images/testimonialStudentGirl.png',
    },
    {
      text: 'O Davi desde cedo demonstrou interesse por Medicina. Como todo mundo sabe, o vestibular é muito concorrido e os estudantes precisam ter uma boa base. No Instituto Solaris, encontramos profissionais bastante qualificados e flexíveis às necessidades do aluno. Davi nem chegou ao Ensino Médio ainda, e já estamos vendo os resultados nas Olimpíadas de Conhecimento.',
      author:
        'Cícero, pai de Davi, estudante da 7ª série do Ensino Fundamental II.',
      image: './assets/images/testimonialDad.png',
    },
    {
      text: 'O acolhimento é um ponto que nossa equipe tem desenvolvido com muito afinco: tratar nossos alunos com respeito e afetividade, sem deixar de construir uma base sólida de conhecimentos que ele utilizará em sua vida e nas provas de vestibulares.',
      author:
        'Carol, professora de Português e Redação.',
      image: './assets/images/testimonialTeacher.png',
    },
    {
      text: 'Cursei todo o Ensino Médio no Instituto Solari, e lá descobri minha vocação para Arquitetura. Só tenho gratidão à equipe, pois todos eles trilharam o caminho para minha realização pessoal e profissional.',
      author:
        'Flávio, ex-aluno.',
      image: './assets/images/testimonialFormerStudent.png',
    },
    {
      text: 'Aqui eu consigo participar de todas as brincadeiras. Minha atividade preferida é colorir. Os professores são muito legais!',
      author:
        'Matheus, estudante do Ensino Fundamental I.',
      image: './assets/images/testimonialStudentBoy.jpg',
    }
  ];

  testimonialAmount: number = this.testimonialList.length;
  testimonialIndexList: number[] = Array.from(
    { length: this.testimonialAmount },
    (_, index) => index + 1
  );

  constructor() {
    this.testimonialText = this.testimonialList[0].text;
    this.testimonialAuthor = this.testimonialList[0].author;
    this.testimonialImage = this.testimonialList[0].image;
  }

  chooseTestimonial(index:number){
    this.testimonialText = this.testimonialList[index-1].text;
    this.testimonialAuthor = this.testimonialList[index-1].author;
    this.testimonialImage = this.testimonialList[index-1].image;
  }
}
