var arr = [{ img:"./images/c1.jpg", h3:"6 Months Diploma in Sketching & Oil Painting - Regular/Part time"   },
{ img: "./images/c2.jpg", h3:"1 to 3 Months Certificate Hobby Course (Regular and Weekend)" },
{ img: "./images/c3.jpg", h3:"One Year Diploma in Fine Arts-Regular/Part Time-Level-3"},{ img: "./images/c4.jpg", h3:"Two years Advance Diploma in Fine Arts - Regular/Part time" },
];

function show() {
    var clutter = "";
    arr.forEach(function (elem, i) {
         clutter = clutter + `<div id="card">
         <img src=${elem.img} alt="" />
         <h3>${elem.h3}</h3>
         <button>Know More</button>
         
     </div>`;
    });
    document.querySelector("#cards").innerHTML = clutter;
    //document.querySelector("#cards2").innerHTML = clutter;
};

show();

var arr2 = [{ img:"./images/c5.jpg" , h3:"Entrance Preparation For N.I.D"  },
{ img:"./images/bfa.jpg" ,h3:"B.F.A from UGC Recognised University"  },
{ img:"./images/ma.jpg",h3:"M.A in Painting from UGC Recognised University"   },
{ img:"./images/c8.jpg",h3:"Entrance preparation for B.F.A"   }
];

function showw() {
    var clutter2 = "";
    arr2.forEach(function (elem, i) {
         clutter2 = clutter2 + `<div id="card2">
         <img src=${elem.img} alt="" />
         <h3>${elem.h3}</h3>
         <button>Know More</button>
     </div>`;
    });
    document.querySelector("#cards2").innerHTML = clutter2;
    //document.querySelector("#cards2").innerHTML = clutter;
};

showw();

var arr3 = [{ img:"./images/kidl1.jpg", h3:"Kids 1 year Diploma (Level-1)"  },
{ img:"./images/kidl2.jpg", h3:"Kids 1 year Diploma (Level-2)"  },{ img:"./images/c11.jpg",h3:"Entrance Preparation for NIFT"   },{ img:"./images/c12.jpg", h3:"3 Months Hobby Certificate Course For Kids"  },
];

function showww() {
    var clutter3 = "";
    arr3.forEach(function (elem, i) {
         clutter3 = clutter3 + `<div id="card2">
         <img src=${elem.img} alt="" />
         <h3>${elem.h3}</h3>
         <button>Know More</button>
     </div>`;
    });
    document.querySelector("#cards3").innerHTML = clutter3;
    //document.querySelector("#cards2").innerHTML = clutter;
};

showww();

