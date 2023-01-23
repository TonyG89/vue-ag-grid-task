# Task ag-grid

### Коментар:
- логіка генерації масива об'єктів лежить **array.js** 
- Змінити кількість рендомних картинок можна, змінивши аргумент функції **makeInt()** у **value.js**. *Значення - 50*
- Змінити кількість об'єктів можна, змінивши аргумент функції **mainArray()** у файлі **array.js**. *Значення - 100*


### Складності:
 - Не відображалась звичайна фільтрація, зробив через **floatingFilter**
 - Агрегацію зробив кількість картинок меньшим, за кількість об'єктів, щоб були дублі, та можно було групувати. 
 - Під час агрегації створив свою функцію для **col3**, бо не рахувало сумму, тому що значення було string, а не num.
 - Зробив свій вивід **"Загалом"**(ИТОГО), бо також вбачав проблему з виводом зі своєю функцією в **статус барі**.
    
### [DEMO](https://vue-ag-grid-task.vercel.app/)
