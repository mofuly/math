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
            }, {
                question: String.raw `\mathrm{已知}\sqrt m+\sqrt{-m}=0，求m\mathrm{的值}`
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
            },
            { answer: String.raw `解:\;\mathrm{因为}\;m\geq0\;且\;-m\geq0,\\\;\;即\;m\geq0\;且\;m\leq0\\\;\;\;\mathrm{所以}\;m=0` }
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
            }, {
                question: String.raw `若m\mathrm{是方程}x^2-3x-1=0\mathrm{的一个根},\\求6m^2-9m+2015\mathrm{的值}`
            }, {
                question: String.raw `\mathrm{已知关于}x\mathrm{的方程}x^2+x-a=0的\\\mathrm{一个根是}2,\mathrm{求另一个根}。`
            }, {
                question: String.raw `\mathrm{某公司}1\mathrm{月份的生成成本是}400\mathrm{万元},\\\mathrm{由于技术改进},\mathrm{生产成本逐月下降},\\3\mathrm{月份的生产成本是}361\mathrm{万元},\mathrm{假设}\\\mathrm{该公司每个月的生产成本下降率相同}.\\(1)\mathrm{求下降率}\\(2)\mathrm{请预测}4\mathrm{月份的生产成本}`
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
            }, {
                answer: String.raw `解：\mathrm{因为}m\mathrm{是方程的根},\\\;\;\;\mathrm{所以}\;2m^2-3m-1=0\\\;\;\;即\;2m^2-3m\;=1\\\;\;\;6m^2-9m+2015\\=\;3(m^2-3m)+2015\\=3\times1+2015\;=\;2018`
            }, {
                answer: String.raw `解:\;\mathrm{设另一个根为}\alpha\\\;\;\;\mathrm{由韦达定理得}:\;2+\alpha=-1\\\;\;\;\mathrm{解得}:\;\alpha=-3`
            }, {
                answer: String.raw `解：\\1）\mathrm{设下降率为}x\\\;\;\;\;400{(1-x)}^2=361\;\;\;\;\mathrm{解得}:\;x=5\%\\2)\;361(1-5\%)\;=\;342.95(\mathrm{万元})`
            }
        ]
    },
    {
        title: '分式方程',
        summary: [],
        questions: [
            {
                question: String.raw `\mathrm{解方程}\frac2{x+3}=\frac1{x-1}`
            },
            { question: String.raw `\mathrm{某校组织学生去}9km\mathrm{外的郊区游玩},\\\mathrm{一部分学生骑自行车先走},\mathrm{半小时后}，\\\mathrm{其他学生乘公共汽车出发}，\mathrm{结果他}\\\mathrm{们同时到达}。\mathrm{已知公共汽车的速度}\\\mathrm{是自行车的}3倍，\mathrm{求自行车的速度}。` }
        ],
        answers: [
            {
                answer: String.raw `解：\mathrm{两边同乘以}(x+3)(x-1)得:\\\;\;\;\;\;\;\;\;\;2(x-1)=x+3\\\;\;\;\;\;\;\;\;\;x=\;5`
            }, {
                answer: String.raw `解：\mathrm{设自行车的速度是}x,\\\;\;\;\mathrm{则公共汽车的速度是}3x\\\;\;\;\;\frac9x=\frac9{3x}+0.5\\\\\mathrm{解得}\;x=12(km/h)`
            }
        ]
    },
    {
        title: '一元一次不等式(组)',
        summary: [],
        questions: [
            {
                question: String.raw `\mathrm{解不等式}x-1\geq\frac{x-2}2+3`
            },
            { question: String.raw `\mathrm{解不等式组}\left\{\begin{array}{l}x-2\leq0\\x+3>0\end{array}\right.` }
        ],
        answers: [
            {
                answer: String.raw `解:\;\mathrm{两边同乘以}2得：\\\;\;\;2(x-1)\geq(x-2)+6\\\;\;\;2x-2\geq x+4\\\;\;\;x\geq6`
            }, {
                answer: String.raw `解:\;\left\{\begin{array}{l}x\leq2\\x>-3\end{array}\right.\\\;\;=>\;-3\;<\;x\;\leq2`
            }
        ]
    },
    {
        title: '位置和变量',
        summary: [],
        questions: [
            {
                question: String.raw `\mathrm{在平面直角坐标系中},点B\mathrm{的坐标是}\\(4,-1),点A\mathrm{与点}B\mathrm{关于}x\mathrm{轴对称},则\\点A\mathrm{的坐标是}？`,
            }, {
                question: String.raw `\mathrm{函数}y=\frac{\sqrt{x+1}}{x-1}\mathrm{中自变量}x\mathrm{的取值范围是}？`
            },
            {
                question: String.raw `\mathrm{小明从家沿着公路去报亭看报},\\\mathrm{看了一段时间后按原路返回},\\\mathrm{小明离家的距离}y(\mathrm{单位}:m)与\\\mathrm{他所用的时间}t(\mathrm{单位}:min）\mathrm{之间}\\\mathrm{的函数关系如图所示}。\mathrm{下列说法}\\\mathrm{正确的是}（\;\;）\\A.\mathrm{小明家离报亭距离是}900m\\B.\mathrm{去报亭的平均速度是}60m/min\\C.\mathrm{回家的平均速度是}80m/min\\D.\mathrm{在报亭看报用了}15min`,
                images: [{
                        subtitle: '', image: [`line(canvas, 50, 0, 50, 160)`,
                            `line(canvas, 50, 160, 299, 160)`,
                            `line(canvas, 50, 160, 110, 40)`,
                            `line(canvas, 110, 40, 170, 40)`,
                            `line(canvas, 170, 40, 250, 160)`,
                            `dashLine(canvas, 110, 40, 50, 40)`,
                            `dashLine(canvas, 50, 70, 190, 70)`,
                            `dashLine(canvas, 110, 160, 110, 40)`,
                            `dashLine(canvas, 170, 40, 170, 160)`,
                            `dashLine(canvas, 190, 70, 190, 160)`,
                            `text(canvas, 'y/min', 55, 10)`,
                            `text(canvas, '1200', 20, 45)`,
                            `text(canvas, '900', 25, 75)`,
                            `text(canvas, 'O', 35, 165)`,
                            `text(canvas, '15', 105, 170)`,
                            `text(canvas, '35', 185, 170)`,
                            `text(canvas, '50', 245, 170)`,
                            `text(canvas, 't/min', 275, 170)`
                        ]
                    }]
            }
        ],
        answers: [
            {
                answer: String.raw `（4，1）`,
            }, {
                answer: String.raw `解：x+1\geqslant0\;且\;x-1\neq0\\\;\;\mathrm{解得}:x\geq-1且x\neq1`
            },
            {
                answer: String.raw `D`,
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
