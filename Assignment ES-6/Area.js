
        var radius = 5;
        var area = Math.PI * radius * radius;
        function circle() {
            this.radius = radius;
            this.area = area;
        }
        circle();
        document.write("Radius of circle:", " ", radius);
        document.write("<br>");
        document.write("Area of circle:", " ", area.toFixed(2));
