---
sidebar_position: 1
---

# Python

Программирование дронов с использованием языка Python.

## Установка

1. Установите Python 3.8 или выше
2. Установите библиотеку Coptra SDK: `pip install coptra-sdk`
3. Установите дополнительные зависимости: `pip install -r requirements.txt`

## Примеры кода

### Подключение к дрону

```python
from coptra_sdk import Drone

# Подключение к дрону
drone = Drone()
drone.connect()

# Проверка статуса
if drone.is_connected():
    print("Дрон подключен успешно!")
else:
    print("Ошибка подключения")
```

### Выполнение простого полета

```python
from coptra_sdk import Drone
import time

drone = Drone()
drone.connect()

# Взлет на высоту 1.5 метра
drone.takeoff(1.5)
time.sleep(5)

# Полет вперед на 2 метра
drone.move_forward(2)
time.sleep(3)

# Возврат домой и посадка
drone.return_to_home()
drone.land()
```

## Документация API

Полная документация доступна на [официальном сайте](https://docs.coptra.com/python-api). 