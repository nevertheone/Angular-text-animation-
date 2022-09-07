import { Component, Input, VERSION } from '@angular/core';
import { TemplateUsageVisitor } from '@angular/core/schematics/migrations/static-queries/strategies/usage_strategy/template_usage_visitor';
import { count } from 'rxjs';
// Aufgabe 1: Schreibe fillTextUpToMaximum. Der Text aus "inputText" soll bis zur maximalen textlänge (variable lineMax mit fillUpSigns aufgefüllt werden)

// Aufgabe 2:  Lass den Benutzer LineMax & InputText eingeben.

// Aufgabe 3: Lasse den Text nach Leerzeichen für Leerzeichen nach rechts wandern und schreib jedes mal eine neue Zeile in textLines. Beispiel: Nimm das Leerzeichen rechts vom Text und füge es links vor dem Text an.
// Aufgabe 4: Lasse den Text zeichen für Zeichen schieben

// aufgabe 5: Ausgabe in Textfield

// aufgabe 6: code aufräumen
// - fillupsign verwenden
// variablen und funktionen sprechend
// code leserlicher machen und KISS

//aufgabe 6
// alles was bisher geschah, rückwärts

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public lineMax: number = 40;
  public fillUpSign: string = ' ';
  public inputTextfinalvalue: string;
  public inputText: string = 'Das ist mein Text';
  public textLines = [''];

  public submitinputvalues() {
    this.textLines = [''];
    if (this.inputText.length > this.lineMax) {
      alert('Error(15891): wabalaba dub dub');
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
    for (let i = 0; i < this.inputText.length; i++) {
      this.SingleCharacterForwardMovement(false);
    }
    for (let i = 0; i < this.inputText.length; i++) {
      this.SingleCharacterForwardMovement(true);
    }
  }

  private SingleCharacterForwardMovement(isReverse: boolean) {
    if (isReverse == false) {
      const countSpaces =
        this.inputTextfinalvalue.length - this.inputText.length;
      const indexToInsert =
        this.inputTextfinalvalue.indexOf(this.fillUpSign) - 1;
      for (let i = 0; i <= countSpaces + 1; i++) {
        this.inputTextfinalvalue =
          this.inputTextfinalvalue.substring(0, indexToInsert) +
          this.fillUpSign +
          this.inputTextfinalvalue.substring(indexToInsert);
        this.inputTextfinalvalue = this.cutSign(this.inputTextfinalvalue);
        this.pushTextToLineEnd();
      }
    } else {
      const countSpaces =
        this.inputTextfinalvalue.length - this.inputText.length;
      const indextoInsert =
        this.inputTextfinalvalue.lastIndexOf(this.fillUpSign) + 2;
      console.log(indextoInsert);
      for (let i = 0; i <= countSpaces; i++) {
        this.inputTextfinalvalue =
          this.inputTextfinalvalue.substring(0, indextoInsert) +
          this.fillUpSign +
          this.inputTextfinalvalue.substring(indextoInsert);
        this.inputTextfinalvalue = this.cutSignBackwards(
          this.inputTextfinalvalue
        );
        this.pushTextToLineEnd();
      }
    }
  }

  private cutSign(input: string): string {
    const indexOfLastSpace = input.lastIndexOf(this.fillUpSign);
    if (indexOfLastSpace !== -1) {
      if (input[indexOfLastSpace - 1] !== this.fillUpSign) {
        return (
          input.substring(0, indexOfLastSpace) +
          input.substring(indexOfLastSpace + 1)
        );
      } else {
        return (
          input.substring(0, indexOfLastSpace - 1) +
          input.substring(indexOfLastSpace)
        );
      }
    } else {
      return input;
    }
  }

  private cutSignBackwards(input: string): string {
    if (input.startsWith(this.fillUpSign)) {
      return (
        input.substring(0, input.indexOf(this.fillUpSign) - 1) +
        input.substring(input.indexOf(this.fillUpSign) + 1)
      );
    } else {
      return input;
    }
  }
}
