import { Component, OnInit } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generatePDF(){
    let docDefinition = {
      header: 'Student Profile',
      //content: ['Sample PDF generated with Angular and PDFMake for C#Corner Blog'  ]
      content: [  
        // Previous Configuration  
        {  
            ul: [  
              'Order can be return in max 10 days.',  
              'Warrenty of the product will be subject to the manufacturer terms and conditions.',  
              'This is system generated invoice.',  
            ],  
        }  
    ]
    };

    pdfMake.createPdf(docDefinition).open();
  }
}

