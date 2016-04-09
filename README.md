# jasmine-autocompleter-bracketsio
Simple Jasmine autocompleter to make easier your day by day testing


# Usage



You just have to write the following pattern to be recognized by the extension and fill it:

  * method:Here goes the description
  
In case of the spyOn method, the pattern changes a bit:
  
  * method:full.path.to.the.function

To have the pattern autocompleted by the extension, press **Ctrl + Shift + J**

At version 0.1.0, there are few jasmine shortcuts implemented:

  * describe: would be recognized as 'd', 'desc' and 'describe'
    * d:Test suite 1
    * desc:Test suite 1
    * describe:Test suite 1
  * it: would be recognized as 'i', 'it' and 't'
    * i:test case 1
    * t:test case 1
    * it:test case 1
  * beforeEach: would be recognized as 'be', 'each', 'beforeeach' and 'beforeEach'  
    * be:
    * each:
    * beforeeach:
    * beforeEach:
  * spyOn: would be recognized as 'so', 'spy', 'spyon' and 'spyOn'
    * so:full.path.to.the.function
    * spy:full.path.to.the.function
    * spyon:full.path.to.the.function
    * spyOn:full.path.to.the.function

