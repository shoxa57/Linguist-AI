# linguist_ai.py
from deep_translator import GoogleTranslator

def translate_text(text, target_lang='ru'):
    try:
        translated = GoogleTranslator(source='auto', target=target_lang).translate(text)
        return {
            "status": "success",
            "original": text,
            "translated": translated
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    user_text = input("Enter text: ")
    result = translate_text(user_text, target_lang='en')
    print(f"Result: {result['translated']}")