import discord
import requests
from discord.ext import tasks
intents = discord.Intents.default()
intents.message_content = True 

client = discord.Client(intents= intents)
url = 'none'

@tasks.loop(seconds=3) # Повторяется каждые 2 секунды
async def my_loop(channel):
    res = requests.get(url)
    await channel.send(res.json())


@client.event
async def on_message(message):
    if message.author == client.user:
        return
    # Мы передаем в функцию myLoop канал, чтобы иметь возможность отправлять сообщения
    if message.content == '$start':
        my_loop.start(message.channel)
    if message.content == '$stope':
        my_loop.stop()

client.run('token')