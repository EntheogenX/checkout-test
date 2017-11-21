const privateKey =
`-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAIFLWzf8cj1Qb+OxEmVBgK1tUoR1a5kDNolCXynDpctuR6EkCUUG
5zjphkdhny1Su702DO1911nXp69glpsOIwMCAwEAAQJAHw54xMPwtOWjWq/n2UaY
oA/IaGTECacJ7IJy1VdXdbuaM8rtbOZr8FCjs749ylaPuz5IILsj5RQAYcg9eNDS
sQIhALih80fT6xR/i+J+pPb3Ru2mS9JfXBe3cAWVuw99CvyNAiEAs0V9bbG0agxk
LUqTU3m5ShNvQ5SduLxUGEPabLkE4c8CIEg7G3kDQBmR2IDweMshbD826rzPj7C7
k/irXjYt/ilVAiEAjbxoMZ0pPhsz7NckagA4Lcf11SGgHZnQhyrGe+VAZeMCIEhk
7Vurnezo+7DDwrfTN9+KbjufQ4wxFMxBdJ2P8cM8
-----END RSA PRIVATE KEY-----`;

const publicKey =
`-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIFLWzf8cj1Qb+OxEmVBgK1tUoR1a5kD
NolCXynDpctuR6EkCUUG5zjphkdhny1Su702DO1911nXp69glpsOIwMCAwEAAQ==
-----END PUBLIC KEY-----`;

const config = {
    expireTime: '30d',
    secrets: {
        JWT_PUBLIC_KEY: publicKey,
        JWT_PRIVATE_KEY: privateKey
    }
}

module.exports = config;



