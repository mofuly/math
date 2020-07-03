"use strict";
const papers = [
    {
        title: '韦达定理',
        summary: [
            String.raw `\mathrm{已知}\alpha,\beta\mathrm{为方程}\:ax^2+bx+c=0(a\neq0),\\则\alpha+\beta=-\frac ba,\alpha\beta=\frac ca。\\`,
            String.raw `若a,b\mathrm{是一元二次方程的两根}，\\\mathrm{则该方程为}x^2-(a+b)x+ab=0。`
        ],
        questions: [
            {
                question: String.raw `a,b\mathrm{是方程}x^2+4x+1=0\mathrm{的两根},求:1)\;\frac1a+\frac1b\;\;2)\;\left|a-b\right|`,
            }, {
                question: String.raw `a,b\mathrm{为方程}x^2-3x+1=0\mathrm{的两根},求\left(\frac ab\right)^2+\left(\frac ba\right)^2`
            }, {
                question: String.raw `a,b\mathrm{是方程}x^2-3x+p=0\mathrm{的不等实根},且a^2-ab+b^2=18,求\frac ba+\frac ab`
            }, {
                question: String.raw `a,b\mathrm{为方程}x^2+x-3=0\mathrm{两根},求a^3-4b^2+15`
            }, {
                question: String.raw `a,b\mathrm{是方程}x^2-x-1=0\mathrm{两根},\mathrm{写出一个以}\frac1a,\frac1b\mathrm{为两根的方程}。`
            }
        ],
        answers: [
            {
                answer: String.raw `\;解:\;\mathrm{由韦达定理得}:\;a+b=-4,\;ab=1\\1)\;\frac1a+\frac1b=\frac{b+a}{ab}=\frac{-4}1=4\\2)\;\left|a-b\right|=\sqrt{\left(a-b\right)^2}=\sqrt{\left(a+b\right)^2-4ab}=\sqrt{\left(-4\right)^2-4(-1)}=2\sqrt3`,
            }, {
                answer: String.raw `解:\;a+b=3,\;ab=1\\\left(\frac ab\right)^2+\left(\frac ba\right)^2=\frac{a^4+b^4}{a^2b^2}=\frac{\left(a^2+b^2\right)^2-2a^2b^2}{\left(ab\right)^2}=\frac{\left[\left(a+b\right)^2-2ab\right]^2-2ab}{1^2}\\=\left[3^2-2\times1\right]^2-2\times1=49-2=47`
            }, {
                answer: String.raw `解:\;a+b=3,\;ab=p,\;a^2+b^2=18+ab\\\;\;\;\;\left(a+b\right)^2-3ab=18,\left(3\right)^2-3p=18,p=-3\\\;\;\;\;\left(\frac ba+\frac ab\right)=\frac{b^2+a^2}{ab}=\frac{18+ab}{ab}=\frac{18+p}p=\frac{18-3}{-3}=-5`
            }, {
                answer: String.raw `解:\;\mathrm{原方程可变形为}x^2=3-x\\\;\;\;\;\;a^3=a^2a=\left(3-a\right)a=3a-a^2=3a-(3-a)=4a-3\\\;\;\;\;\;b^2=3-b\\\;\;\;\;\;\mathrm{原式}=4a-3-4(3-b)+15=4a+4b=4(a+b)=4(-1)=-4`
            }, {
                answer: String.raw `解:\;a+b=1,\;ab=-1\\\;\;\;\;\frac1a+\frac1b=\frac{a+b}{ab}=-1,\;\frac1a\times\frac1b=\frac1{ab}=-1\\\;\;\;\;\mathrm{所以方程为}:x^2+x-1=0`
            }
        ]
    },
    {
        title: '数与式',
        summary: [],
        questions: [
            {
                question: String.raw `\mathrm{若二次根式}\sqrt{x-1}\mathrm{有意义},\\则x\mathrm{的取值范围是}?`,
            },
            { question: String.raw `400\;000\;和\\0.000\;000\;000\;34\\\mathrm{的科学计数法分别表示为}？` },
            { question: String.raw `\mathrm{估计}\left(2\sqrt{30}-\sqrt{24}\right)\times\sqrt{\frac16}\\\mathrm{的值的范围}。` },
            { question: String.raw `\mathrm{计算}\left(\frac12\right)^{-1}-\left|\sqrt3-1\right|+2\sin60^\circ+\left(\pi-4\right)^0` },
            {
                question: String.raw `\mathrm{比较大小}:\;\sqrt{2020}-\sqrt{2019}和\sqrt{2019}-\sqrt{2018}`
            }
        ],
        answers: [
            {
                answer: String.raw `解：x-1\geq0\\\;\;\;\;\;\;\;\;\;x\;\geq1`,
            }, {
                answer: String.raw `解：400\;000\;=4\times10^5\\\;\;\;\;\;\;\;\;0.000\;000\;000\;34=0.34\times10^{-10}`
            }, {
                answer: String.raw `解：\left(2\sqrt{30}-\sqrt{24}\right)\times\sqrt{\frac16}\\\;\;\;\;\;=2\sqrt{30}\times\sqrt{\frac16}-\sqrt{24}\times\sqrt{\frac16}\\\;\;\;\;\;=2\sqrt5\;-2\\\;\;\;\;2\sqrt5=\sqrt{20}\;在4和5\mathrm{之间}\\\;\;\;\mathrm{所以原式在}2和3\mathrm{之间}`
            }, {
                answer: String.raw `解：\mathrm{原式}=2-\sqrt3+1+2\times\frac{\sqrt3}2+1=4`
            },
            {
                answer: String.raw `解:(\mathrm{倒数法})\\\;\;\;\;\frac1{\sqrt{2020}-\sqrt{2019}}=\sqrt{2020}+\sqrt{2019}\\\;\;\;\;\frac1{\sqrt{2019}-\sqrt{2018}}=\sqrt{2019}+\sqrt{2018}<\sqrt{2020}+\sqrt{2019}\\\;\;\;\;\mathrm{所以}\;\sqrt{2020}-\sqrt{2019}<\sqrt{2019}-\sqrt{2018}`
            }
        ]
    },
    {
        title: '整式方程',
        summary: [],
        questions: [
            {
                question: String.raw `\mathrm{方程}2x+a+5=0\mathrm{的解是}x=1,求a\mathrm{的值}`,
            }, {
                question: String.raw `\mathrm{原价}x元,\mathrm{第一次打八折},\\\mathrm{第二次再减}10元,\\\mathrm{最后价格是}90元,求x`
            }, {
                question: String.raw `\mathrm{已知}x,y\mathrm{满足方程组}\left\{\begin{array}{l}x+6y=12,\\3x-2y=8,\end{array}\right.\\求\;x+y\;\mathrm{的值}`
            }, {
                question: String.raw `\mathrm{某班去看演出},\mathrm{甲种票价}24元,\\\mathrm{乙种票价}18元,35\mathrm{名学生花了}750元,\\\mathrm{两种票各买了多少张}？`
            }
        ],
        answers: [
            {
                answer: String.raw `解:把x=1\mathrm{代入方程得}:2+a+5=0\\\;\;\;\;\mathrm{解得}a=-7`,
            }, {
                answer: String.raw `解:0.8x-10=90\\\;\;\;\;\;\mathrm{解得}x=125(元)`
            }, {
                answer: String.raw `\begin{array}{l}解:\;由x+6y=12得x=12-6y\\\;\;\;\;\mathrm{代入}3x-2y=8得36-2y=8\end{array}\\\;\;\;\;\;\mathrm{解得}\;x=3.6\;y=1.4\\\;\;\;\;\;\mathrm{所以}\;x+y=3.6+1.4=5`
            }, {
                answer: String.raw `解:\mathrm{设买了}x\mathrm{张甲种票},y\mathrm{张乙种票}\\\;\;\;\;\left\{\begin{array}{l}x+y=35\\24x+18y=750\end{array}\right.\\\;\;\;\mathrm{解得}\;x\;=\;20\;y=15`
            }
        ]
    }
];
// {
//     title: '',
//         summary: [],
//             questions: [
//                 {
//                     question: '',
//                     // images:[subtitle:'',image:[]]
//                 }
//             ],
//                 answers: [
//                     {
//                         answer: '',
//                         // images:[subtitle:'',image:[]]
//                     }
//                 ]
// }
