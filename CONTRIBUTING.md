# دليل المساهمة في SafePlay

## كيف تساهم؟

نرحب بمساهماتك! سواء كانت تقارير عيوب أو تحسينات أو ميزات جديدة.

## خطوات المساهمة

### 1. أعد الكود
```bash
# انسخ (Fork) المستودع

# استنسخ نسختك
git clone https://github.com/YOUR-USERNAME/safe.git
cd safe

# أضف المستودع الأصلي كـ upstream
git remote add upstream https://github.com/romanyiskander9999-ui/safe.git
```

### 2. أنشئ فرع
```bash
git checkout -b feature/your-feature
# أو
git checkout -b fix/your-bugfix
```

### 3. طبق التغييرات
```bash
# قم بالتغييرات
# اختبر كودك
npm run dev
```

### 4. الْتزم بالتغييرات
```bash
git add .
git commit -m "type: description"

# أمثلة:
# git commit -m "feat: أضف نظام التنبيهات"
# git commit -m "fix: إصلاح خطأ في لوحة الوالد"
# git commit -m "docs: تحديث التوثيق"
```

### 5. ادفع التغييرات
```bash
git push origin feature/your-feature
```

### 6. افتح Pull Request
- اذهب إلى المستودع الأصلي
- انقر على "New Pull Request"
- اختر فرعك
- أكمل النموذج

## معايير الكود

### TypeScript
- استخدم أنواع صارمة
- تجنب استخدام `any`
- أضف تعليقات للأكواد المعقدة

### React
- استخدم Functional Components
- استخدم Hooks
- تجنب re-renders غير الضرورية

### التصميم
- اتبع نظام Tailwind CSS
- استخدم الألوان المعرفة في `tailwind.config.js`
- اجعل الواجهة مستجيبة
- ادعم RTL بالكامل

### أسماء الملفات
- استخدم camelCase للملفات
- استخدم PascalCase للمكونات
- استخدم kebab-case للمجلدات

## اختبار الكود

```bash
# تشغيل خادم التطوير
npm run dev

# اختبار بيانات اعتماد مختلفة
# استخدم بيانات الاعتماد في README.md
```

## المشاكل الشائعة

### المشكلة: Merge conflicts
```bash
# حدّث فرعك من upstream
git fetch upstream
git rebase upstream/main
```

### المشكلة: Commits متعددة
```bash
# ادمج الـ commits
git rebase -i HEAD~3
```

## قواعس السلوك

- كن محترماً تجاه الآخرين
- تجنب التعليقات المسيئة
- ركز على الفكرة وليس الشخص
- ساعد المبتدئين

## الحصول على المساعدة

- اسأل في Issues
- شارك في Discussions
- تواصل عبر البريد الإلكتروني

شكراً على مساهمتك! 🙏
