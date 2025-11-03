# CSS Animations Library

Коллекция готовых CSS анимаций для UI компонентов в AI Agent Factory.

## Доступные анимации

### 1. Button Pulse Animation

**Файл:** `button-pulse.css`

Простая и эффектная pulse анимация для кнопок с тремя вариациями скорости.

#### Варианты

| Класс | Длительность | Использование |
|-------|--------------|---------------|
| `.button-pulse` | 2s | Стандартная скорость для большинства UI элементов |
| `.button-pulse-fast` | 1s | Срочные действия, уведомления, call-to-action кнопки |
| `.button-pulse-slow` | 3s | Спокойные UI, декоративные элементы, фоновые индикаторы |

#### Использование

```html
<!-- Подключите CSS файл -->
<link rel="stylesheet" href="button-pulse.css">

<!-- Базовая pulse анимация -->
<button class="button-pulse">Click Me</button>

<!-- Быстрая pulse анимация -->
<button class="button-pulse-fast">Urgent Action</button>

<!-- Медленная pulse анимация -->
<button class="button-pulse-slow">Background Element</button>
```

#### Демонстрация

Откройте `demo.html` в браузере для интерактивной демонстрации всех вариантов анимации.

```bash
# В директории animations
open demo.html
# или для Windows
start demo.html
```

#### Характеристики

- **Производительность:** Использует GPU-ускоренные свойства (transform, opacity)
- **Accessibility:** Автоматически отключается для пользователей с `prefers-reduced-motion`
- **Совместимость:** Работает во всех современных браузерах
- **Размер:** ~2.5KB (неминифицированный)

---

## Структура директории

```
animations/
├── README.md               # Этот файл - документация
├── button-pulse.css       # CSS файл с pulse анимацией
└── demo.html              # Интерактивная демонстрация
```

---

## Best Practices

### Производительность

1. **Используйте transform и opacity** - они наиболее производительны
2. **Избегайте анимации layout свойств** (width, height, margin) - вызывают reflow
3. **Не злоупотребляйте will-change** - используется только в готовых классах

### Accessibility

Все анимации автоматически отключаются для пользователей с настройкой `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .button-pulse,
  .button-pulse-fast,
  .button-pulse-slow {
    animation: none;
  }
}
```

### Timing и Easing

- **Loading states:** 1-2s для skeleton/shimmer эффектов
- **Micro-interactions:** 75-200ms для button-press
- **Page transitions:** 300-400ms для smooth UX
- **Easing functions:** ease-out для входа, ease-in для выхода

---

## Добавление новых анимаций

При добавлении новой анимации следуйте структуре:

1. **Создайте CSS файл** с понятным именем (например, `card-flip.css`)
2. **Добавьте комментарии** с описанием использования
3. **Создайте demo.html** для визуальной демонстрации
4. **Обновите этот README** с документацией
5. **Добавьте @media (prefers-reduced-motion)** для accessibility

### Шаблон CSS анимации

```css
/**
 * Animation Name
 *
 * Описание анимации и её назначение.
 *
 * ИСПОЛЬЗОВАНИЕ:
 * <элемент class="animation-class">Content</элемент>
 */

.animation-class {
  animation: animation-name 1s ease-in-out infinite;
  will-change: transform, opacity;
}

@keyframes animation-name {
  0% { /* начало */ }
  100% { /* конец */ }
}

@media (prefers-reduced-motion: reduce) {
  .animation-class {
    animation: none;
    will-change: auto;
  }
}
```

---

## Тестирование

### Визуальное тестирование

1. Откройте `demo.html` в браузере
2. Проверьте плавность анимации (60fps)
3. Протестируйте на разных экранах (mobile, tablet, desktop)

### Accessibility тестирование

```javascript
// В DevTools Console включите prefers-reduced-motion
// и проверьте, что анимации отключены
document.documentElement.style.setProperty(
  'prefers-reduced-motion',
  'reduce'
);
```

### Performance тестирование

1. Откройте Chrome DevTools → Performance
2. Запишите профиль во время анимации
3. Проверьте, что нет layout thrashing
4. FPS должен быть стабильно 60

---

## Roadmap

Планируемые анимации:

- [ ] Card flip animation
- [ ] Skeleton loader
- [ ] Shimmer effect
- [ ] Slide-in transitions
- [ ] Fade animations
- [ ] Bounce effects
- [ ] Rotation animations

---

## Версия

**Версия:** 1.0.0
**Дата:** 2025-11-03
**Автор:** UI/UX Enhancement Agent
**Проект:** AI Agent Factory

---

## Лицензия

Часть проекта AI Agent Factory. Для внутреннего использования.
