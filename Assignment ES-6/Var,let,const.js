
        var i = 20;
        function firstFunction() {

            function innerFunction() {
                document.write("i=", i);
            }
            return innerFunction;

        };
        innerFunc = firstFunction();
        innerFunc();

        document.write("<br>");


        function secondFunction() {
            let i = 10;
            function inner2Function() {
                document.write("i=", i);
            }
            return inner2Function;

        };
        inner2Func = secondFunction();
        inner2Func();

        document.write("<br>");


        function thirdFunction() {
            const i = 30;
            function inner3Function() {
                document.write("i=", i);
            }
            return inner3Function;

        };
        inner3Func = thirdFunction();
        inner3Func();
