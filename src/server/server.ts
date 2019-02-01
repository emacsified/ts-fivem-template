onNet('helloserver', () => {
  const _source = (global as any).source;

  emitNet('helloclient', _source, 'i got your message!');
});
