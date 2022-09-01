import { Component, Input, VERSION } from '@angular/core';
// Aufgabe 1: Schreibe fillTextUpToMaximum. Der Text aus "inputText" soll bis zur maximalen textlänge (variable lineMax mit fillUpSigns aufgefüllt werden)

// Aufgabe 2:  Lass den Benutzer LineMax & InputText eingeben.

// Aufgabe 3: Lasse den Text nach Leerzeichen für Leerzeichen nach rechts wandern und schreib jedes mal eine neue Zeile in textLines. Beispiel: Nimm das Leerzeichen rechts vom Text und füge es links vor dem Text an.
// Aufgabe 4: Lasse den Text zeichen für Zeichen schieben

// Aufgabe 5: Lasse 2/3 des Textes stehen, das letzte drittel Schiebst du FAST bis ganz nach links und lässt einen Buchstaben in der mitte 2x von links nach rechts wandern und wieder zurück

// Aufgabe 6: Überleg dir etwas, wie der Text animiert aussieht. Gib als nicht alle Zeile aus, sondern nur immmer eine, damti es wirkt als wäre es eine Animation.

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public lineMax: number = 40;
  public fillUpSign: string = ' '; // Verwende dieses Zeichen um Aufzufüllen. Kein normales Leerzeichen
  public inputTextfinalvalue: string = 'Das ist mein Text';
  public inputText: string = 'Das ist mein Text';
  public textLines = [''];

  constructor() {
    this.init();
  }
  public submitinputvalues() {
    if (this.inputText.length > this.lineMax) {
      alert('beep');
    }
    this.init();
  }

  private pushTextToLineEnd(): void {
    this.textLines.push(this.inputTextfinalvalue);
  }

  private fillTextUpToMaximum(): void {
    for (let i = 0; i < this.lineMax - this.inputText.length; i++) {
      this.inputTextfinalvalue = this.inputTextfinalvalue + this.fillUpSign;
    }
    this.pushTextToLineEnd();
  }

  private init() {
    this.inputTextfinalvalue = this.inputText;
    this.fillTextUpToMaximum();
    this.callfillfunction();
  }

  private callfillfunction() {
    const countSpaces = this.inputTextfinalvalue.length - this.inputText.length;
    const indexToInsert = this.inputTextfinalvalue.indexOf(' ') - 1;

    for (let i = 0; i < countSpaces; i++) {
      this.inputTextfinalvalue =
        this.inputTextfinalvalue.substring(0, indexToInsert) +
        this.fillUpSign +
        this.inputTextfinalvalue.substring(indexToInsert);
      this.onlySpaceSplice();
      this.pushTextToLineEnd();
    }
    if (this.inputTextfinalvalue.startsWith(' ')) {
      return;
    } else {
      this.callfillfunction();
    }
  }
  private onlySpaceSplice() {
    if (this.inputTextfinalvalue.endsWith(' ')) {
      this.inputTextfinalvalue = this.inputTextfinalvalue.slice(0, -1);
    }
  }
}
