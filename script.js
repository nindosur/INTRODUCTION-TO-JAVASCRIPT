    //1
    value = +prompt('Введите число: ')
    a = value ** 2
    alert(value + ' во второй степени равняется ' + a)

    //2
    a = +prompt('Введите первое число: ')
    b = +prompt('Введите второе число: ')
    c = (a+b)/2
    alert('Ср. арифметическое этих чисел равняется ' + c)

    //3
    value = +prompt('Введите сторону квадрата: ');
    pl = value*value;
    alert('Площадь квадрата: ' + pl);

    //4
    km = +prompt('Введите киломенты, программа выведет мили: ')
    const mil = 0.621371
    const milli = km * mil
    alert(km + ' киломентов это ' + milli + ' миль!')

    //5
    a = +prompt('Введите первое число: ');
    b = +prompt('Введите второе число:');
    p = a + b;
    m = a - b;
    u = a * b;
    d = a / b;
    alert(a + ' + ' + b + ' = ' + p);
    alert(a + ' - ' + b + ' = ' + m);
    alert(a + ' * ' + b + ' = ' + u);
    alert(a + ' / ' + b + ' = ' + d);

    //6
    a = +prompt('Введите значение a: ');
    b = +prompt('Введите значение b: ');
    let x = -b / a;
    alert('Значение X в формуле "a * x + b = 0" равняется: ' + x)

    //7
    hour = +prompt('Введите часы: ');
    minu = +prompt('Введите минуты');
    h = 24;
    m = 60;
    const hh = h - hour;
    const mm = m - minu;
    alert('До следующего дня осталось ' + hh + ' часов, ' + mm + ' минут.')

    //8
    value = +prompt('Введите трехзначное число: ')
    valueTwo = Math.floor(value / 10) % 10;
    alert('Вторая цифра числа: ' + valueTwo);

    //9
    number = +prompt('Введите пятизначное число:');
    lastDigit = number % 10;
    number = Math.floor(number / 10);
    newNumber = String(lastDigit) + String(number);
    alert('Новое число: ' + newNumber);

    //10
    const sales = +prompt('Введите общую сумму продаж за месяц: ');
    const premium = sales * 0.10;
    const salary = 250 + premium;
    alert('Зарплата сотрудника за месяц составляет: ' + salary)
