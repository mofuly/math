"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var ImageType;
(function (ImageType) {
    ImageType[ImageType["inverseProportionalFunction"] = 0] = "inverseProportionalFunction";
    ImageType[ImageType["linearFunction"] = 1] = "linearFunction";
    ImageType[ImageType["quadraticFunction"] = 2] = "quadraticFunction";
    ImageType[ImageType["polygan"] = 3] = "polygan";
    ImageType[ImageType["dashLine"] = 4] = "dashLine";
    ImageType[ImageType["line"] = 5] = "line";
    ImageType[ImageType["rectangle"] = 6] = "rectangle";
})(ImageType || (ImageType = {}));
;
var papers = [
    {
        title: '韦达定理',
        summary: String.raw(__makeTemplateObject(["1\uFF0Cmathrm{\u5DF2\u77E5}alpha,\betamathrm{\u4E3A\u65B9\u7A0B}:ax^2+bx+c=0(a\neq0),\\\u5219alpha+\beta=-\frac ba,alpha\beta=\frac ca\u3002\\2\uFF0C\u82E5a,bmathrm{\u662F\u4E00\u5143\u4E8C\u6B21\u65B9\u7A0B\u7684\u4E24\u6839}\uFF0C\\mathrm{\u5219\u8BE5\u65B9\u7A0B\u4E3A}x^2-(a+b)x+ab=0\u3002"], ["1\uFF0C\\mathrm{\u5DF2\u77E5}\\alpha,\\beta\\mathrm{\u4E3A\u65B9\u7A0B}\\:ax^2+bx+c=0(a\\neq0),\\\\\u5219\\alpha+\\beta=-\\frac ba,\\alpha\\beta=\\frac ca\u3002\\\\2\uFF0C\u82E5a,b\\mathrm{\u662F\u4E00\u5143\u4E8C\u6B21\u65B9\u7A0B\u7684\u4E24\u6839}\uFF0C\\\\\\mathrm{\u5219\u8BE5\u65B9\u7A0B\u4E3A}x^2-(a+b)x+ab=0\u3002"])),
        questions: [
            String.raw(__makeTemplateObject(["a,bmathrm{\u662F\u65B9\u7A0B}x^2+4x+1=0mathrm{\u7684\u4E24\u6839},\u6C42:1);\frac1a+\frac1b;;2);left|a-b\right|"], ["a,b\\mathrm{\u662F\u65B9\u7A0B}x^2+4x+1=0\\mathrm{\u7684\u4E24\u6839},\u6C42:1)\\;\\frac1a+\\frac1b\\;\\;2)\\;\\left|a-b\\right|"])),
            String.raw(__makeTemplateObject(["a,bmathrm{\u4E3A\u65B9\u7A0B}x^2-3x+1=0mathrm{\u7684\u4E24\u6839},\u6C42left(\frac ab\right)^2+left(\frac ba\right)^2"], ["a,b\\mathrm{\u4E3A\u65B9\u7A0B}x^2-3x+1=0\\mathrm{\u7684\u4E24\u6839},\u6C42\\left(\\frac ab\\right)^2+\\left(\\frac ba\\right)^2"])),
            String.raw(__makeTemplateObject(["a,bmathrm{\u662F\u65B9\u7A0B}x^2-3x+p=0mathrm{\u7684\u4E0D\u7B49\u5B9E\u6839},\u4E14a^2-ab+b^2=18,\u6C42\frac ba+\frac ab"], ["a,b\\mathrm{\u662F\u65B9\u7A0B}x^2-3x+p=0\\mathrm{\u7684\u4E0D\u7B49\u5B9E\u6839},\u4E14a^2-ab+b^2=18,\u6C42\\frac ba+\\frac ab"])),
            String.raw(__makeTemplateObject(["a,bmathrm{\u4E3A\u65B9\u7A0B}x^2+x-3=0mathrm{\u4E24\u6839},\u6C42a^3-4b^2+15"], ["a,b\\mathrm{\u4E3A\u65B9\u7A0B}x^2+x-3=0\\mathrm{\u4E24\u6839},\u6C42a^3-4b^2+15"])),
            String.raw(__makeTemplateObject(["a,bmathrm{\u662F\u65B9\u7A0B}x^2-x-1=0mathrm{\u4E24\u6839},mathrm{\u5199\u51FA\u4E00\u4E2A\u4EE5}\frac1a,\frac1bmathrm{\u4E3A\u4E24\u6839\u7684\u65B9\u7A0B}\u3002"], ["a,b\\mathrm{\u662F\u65B9\u7A0B}x^2-x-1=0\\mathrm{\u4E24\u6839},\\mathrm{\u5199\u51FA\u4E00\u4E2A\u4EE5}\\frac1a,\\frac1b\\mathrm{\u4E3A\u4E24\u6839\u7684\u65B9\u7A0B}\u3002"]))
        ],
        answers: [
            String.raw(__makeTemplateObject([";\u89E3:;mathrm{\u7531\u97E6\u8FBE\u5B9A\u7406\u5F97}:;a+b=-4,;ab=1\\1);\frac1a+\frac1b=\frac{b+a}{ab}=\frac{-4}1=4\\2);left|a-b\right|=sqrt{left(a-b\right)^2}=sqrt{left(a+b\right)^2-4ab}=sqrt{left(-4\right)^2-4(-1)}=2sqrt3"], ["\\;\u89E3:\\;\\mathrm{\u7531\u97E6\u8FBE\u5B9A\u7406\u5F97}:\\;a+b=-4,\\;ab=1\\\\1)\\;\\frac1a+\\frac1b=\\frac{b+a}{ab}=\\frac{-4}1=4\\\\2)\\;\\left|a-b\\right|=\\sqrt{\\left(a-b\\right)^2}=\\sqrt{\\left(a+b\\right)^2-4ab}=\\sqrt{\\left(-4\\right)^2-4(-1)}=2\\sqrt3"])),
            String.raw(__makeTemplateObject(["\u89E3:;a+b=3,;ab=1\\left(\frac ab\right)^2+left(\frac ba\right)^2=\frac{a^4+b^4}{a^2b^2}=\frac{left(a^2+b^2\right)^2-2a^2b^2}{left(ab\right)^2}=\frac{left[left(a+b\right)^2-2ab\right]^2-2ab}{1^2}\\=left[3^2-2\times1\right]^2-2\times1=49-2=47"], ["\u89E3:\\;a+b=3,\\;ab=1\\\\\\left(\\frac ab\\right)^2+\\left(\\frac ba\\right)^2=\\frac{a^4+b^4}{a^2b^2}=\\frac{\\left(a^2+b^2\\right)^2-2a^2b^2}{\\left(ab\\right)^2}=\\frac{\\left[\\left(a+b\\right)^2-2ab\\right]^2-2ab}{1^2}\\\\=\\left[3^2-2\\times1\\right]^2-2\\times1=49-2=47"])),
            String.raw(__makeTemplateObject(["\u89E3:;a+b=3,;ab=p,;a^2+b^2=18+ab\\;;;;left(a+b\right)^2-3ab=18,left(3\right)^2-3p=18,p=-3\\;;;;left(\frac ba+\frac ab\right)=\frac{b^2+a^2}{ab}=\frac{18+ab}{ab}=\frac{18+p}p=\frac{18-3}{-3}=-5"], ["\u89E3:\\;a+b=3,\\;ab=p,\\;a^2+b^2=18+ab\\\\\\;\\;\\;\\;\\left(a+b\\right)^2-3ab=18,\\left(3\\right)^2-3p=18,p=-3\\\\\\;\\;\\;\\;\\left(\\frac ba+\\frac ab\\right)=\\frac{b^2+a^2}{ab}=\\frac{18+ab}{ab}=\\frac{18+p}p=\\frac{18-3}{-3}=-5"])),
            String.raw(__makeTemplateObject(["\u89E3:;mathrm{\u539F\u65B9\u7A0B\u53EF\u53D8\u5F62\u4E3A}x^2=3-x\\;;;;;a^3=a^2a=left(3-a\right)a=3a-a^2=3a-(3-a)=4a-3\\;;;;;b^2=3-b\\;;;;;mathrm{\u539F\u5F0F}=4a-3-4(3-b)+15=4a+4b=4(a+b)=4(-1)=-4"], ["\u89E3:\\;\\mathrm{\u539F\u65B9\u7A0B\u53EF\u53D8\u5F62\u4E3A}x^2=3-x\\\\\\;\\;\\;\\;\\;a^3=a^2a=\\left(3-a\\right)a=3a-a^2=3a-(3-a)=4a-3\\\\\\;\\;\\;\\;\\;b^2=3-b\\\\\\;\\;\\;\\;\\;\\mathrm{\u539F\u5F0F}=4a-3-4(3-b)+15=4a+4b=4(a+b)=4(-1)=-4"])),
            String.raw(__makeTemplateObject(["\u89E3:;a+b=1,;ab=-1\\;;;;\frac1a+\frac1b=\frac{a+b}{ab}=-1,;\frac1a\times\frac1b=\frac1{ab}=-1\\;;;;mathrm{\u6240\u4EE5\u65B9\u7A0B\u4E3A}:x^2+x-1=0"], ["\u89E3:\\;a+b=1,\\;ab=-1\\\\\\;\\;\\;\\;\\frac1a+\\frac1b=\\frac{a+b}{ab}=-1,\\;\\frac1a\\times\\frac1b=\\frac1{ab}=-1\\\\\\;\\;\\;\\;\\mathrm{\u6240\u4EE5\u65B9\u7A0B\u4E3A}:x^2+x-1=0"]))
        ]
    }
];
