# PHP

# :o: Install

:computer: Windows

- [ ] Install

```
PS > choco install php
```

- [ ] Test

```
$ php --version
PHP 8.0.1 (cli) (built: Jan  5 2021 23:43:33) ( NTS Visual C++ 2019 x64 )
Copyright (c) The PHP Group
Zend Engine v4.0.1, Copyright (c) Zend Technologies
```


:apple: MacOS

```
$ brew install php
```

## :a: CLI

:bulb: Sous `git bash` ajouter `winpty`

```php
$ php -a
Interactive shell

php > echo 5+8;
13
php > function addTwo($n)
php > {
php { return $n + 2;
php { }
php > var_dump(addTwo(2));
int(4)
php >
```


https://www.php.net/manual/en/features.commandline.interactive.php

## :b: Functional Programming

- HOF

```php
$ php -a
Interactive shell

php > function sum(int $number1, int $number2) {
php {   return $number1 + $number2;
php { }
php > var_dump( sum(sum(3, 4),sum(5,5)));
int(17)
php > echo sum(sum(3, 4),sum(5,5));
17
php >
```

- Map

```php
$ php -a
Interactive shell

php > $array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
php > $square = function (int $num): int {
php { return pow($num, 2);
php { };
php > var_dump( array_map($square, $array)); //-> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
array(10) {
  [0]=>
  int(0)
  [1]=>
  int(1)
  [2]=>
  int(4)
  [3]=>
  int(9)
  [4]=>
  int(16)
  [5]=>
  int(25)
  [6]=>
  int(36)
  [7]=>
  int(49)
  [8]=>
  int(64)
  [9]=>
  int(81)
}
```

https://formulae.brew.sh/formula/php





# Reférences

https://dev.to/ohryan/what-are-your-thoughts-on-functional-programming-in-php-33f6

https://apiumhub.com/tech-blog-barcelona/functional-php/

https://leanpub.com/functional-php/read
