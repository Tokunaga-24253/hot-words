# encoding=utf-8
from collections import Counter
import jieba
import pandas as pd


f=open('D:\yuandaima\HotWords\Require.txt','r',encoding='UTF-8')
sentense=f.read()
f.close()
test=jieba.cut(sentense)
#print(" ".join(test))
c=Counter()
for x in test:
        if len(x)>1 and x != '\r\n':
            c[x] += 1

a = []
b = []

for (k,v) in c.most_common(20):
    if k == '经验' or k == '了解' or k == '熟练' or k == '使用' or k == '相关' or k == '熟悉' or k == '掌握' or k == '良好':
        continue
    a.append(k)
    b.append(v)

dataframe = pd.DataFrame({'name':a,'number':b})
dataframe.to_csv("data.csv",index=False,sep=',')