import { Component } from '@angular/core';
import { Book } from 'src/app/class/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  book: Book = new Book(1,2, "Lecciones Sanitarias", "electronico", "Manu Moreno", 17, "https://cienciasanitaria.es/wp-content/uploads/2023/12/PACK-3-CONGRESOS-2024-CIENCIASANITARIA.png");
  book2: Book = new Book(1,2, "Manual Ciencia Sanitaria", "papel", "Pili Ochoa", 37, "https://mischuletasmedicas.files.wordpress.com/2022/03/1200x1200-1.jpeg");
  book3: Book = new Book(1,2, "Manual Ciencia Sanitaria", "papel", "Pili Ochoa", 37, "https://mischuletasmedicas.files.wordpress.com/2022/03/1200x1200-1.jpeg");
  book4: Book = new Book(1,2, "Manual Ciencia Sanitaria", "papel", "Pili Ochoa", 37, "https://mischuletasmedicas.files.wordpress.com/2022/03/1200x1200-1.jpeg");
  book5: Book = new Book(1,2, "Manual Ciencia Sanitaria", "papel", "Pili Ochoa", 37, "https://mischuletasmedicas.files.wordpress.com/2022/03/1200x1200-1.jpeg");

  books: Book[] = [this.book, this.book2, this.book3, this.book4, this.book5];
  // books: Book[] = [];

  constructor(){

  }

  crearLibro(id_book:string, title:string, type:string, author:string, price:string, photo:string){
    let bookNew : Book;
    if(id_book != "" && title != "" && type != "" && author != "" && price != "" && photo != ""){
      bookNew = new Book(Number(id_book), 1, title, type, author, Number(price), photo); 
      this.books.push(bookNew);
    }

  }

}
