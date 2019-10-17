In Agile methodology, the code is broken into small parts and at a time, only that particular code is worked or tested. Continuous communication on the particular code part is done by a team so that the focus is only on that particular code. This makes the agile process more flexible and focused.

`Singleton` - a singleton class is a class that can have only one object (an instance of the class) at a time. https://www.geeksforgeeks.org/singleton-class-java/

`O(log(n))` - 
```
for(int i = 1; i <= n; i = i * 2)
  print "hello";
```

# Linux general

"/etc" is used for configurations (.conf files etc). here you find all the configs and settings for your OS.

"/usr" is used for "user programs". Usually your package manager installs all the binaries, shared files etc. from all programs here (except config files, which go to /etc). You can check /usr/bin for binaries, /usr/share for shared files (media, etc), /usr/share/doc for documentation,...

There is also an "/opt" folder, where there are "other" programs usually put (mostly binary programs, or programs installed from other sources (not the default package manager). Some programs like that (usually compiled) also go to "/usr/local"

"/var" is usually used for log files, 'temporary' files (like mail spool, printer spool, etc), databases, and all other data not tied to a specific user. Logs are usually in "/var/log", databases in "/var/lib" (mysql - "/var/lib/mysql"), etc.

# PHP notes
Use `Zend` engine, written in C.

1. Variable name cannot starts with number. `$2foo`
2. `include() vs require()` - both include a specific file.
   1. require return a fatal error when file not found and exit.
   2. include skip to next step when file not found.
3. `$SERVER["REMOTE_ADDR"]` - find IP address
4. `unset() and unlink()` - 
   1. unset set variable to undefined.
   2. unlink deletes a file from server.
5. `define()` - create CONSTANT variable. `define("PI", 3.14)`. Can access it like this `echo PI;`
6. `@` - STFU operator. Won't return error when something goes wrong. $xyz = [1,2,3,4,5]; dd(@$xyz[8]); //output null
7. `strstr() or stristr()` - In PHP both functions are used to find the first occurrence of substring in a string except stristr() is case-insensitive and strstr is case-sensitive,if no match is found then FALSE will be returned.
8. `func_get_args()` - function is used to get number of arguments passed in a PHP function
9. `Cross site scripting` - 
10. `get_browser()` - get browser details. Need to enable browscap in php.ini
   
`curl` - Code to post JSON Data in a URL using CURL in PHP
```php
$url='https://www.onlineinterviewquestions.com/get_details';
$jsonData='{"name":"phpScots",
"email":"phpscots@onlineinterviewquestions.com"
,'age':36
}';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 0);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
curl_close($ch);
```

## Reference(&)
 PHP references allow you to make two variables refer to the same content. Meaning, when you do:

    $a =& $b; OR $a = &$b;

it means that $a and $b point to the same content.

## trait

`trait` - A Trait is intended to reduce some limitations of single inheritance by enabling a developer to reuse sets of methods freely in several independent classes living in different class hierarchies.

Current class method is given higher importance - 
`current_class_method > trait_method > parent_method`

```php
class Base {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo 'World!';
    }
}

class MyHelloWorld extends Base {
    use SayWorld;
}

$o = new MyHelloWorld();
$o->sayHello(); // Output: "Hello World!"

class MyHelloWorld extends Base {
    use SayWorld;

    public function sayHello() {
        echo 'Hello Universe!';
    }
}

$o = new MyHelloWorld();
$o->sayHello(); // Output: "Hello Universe!"
```
## final 
Cannot extends method if it's been defined with final keyword. if the entire class is defined with final `final class BaseClass`, noone can extends that class.

```php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called\n";
   }
   
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called\n";
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called\n";
   }
}
// Results in Fatal error: Cannot override final method BaseClass::moreTesting()
```