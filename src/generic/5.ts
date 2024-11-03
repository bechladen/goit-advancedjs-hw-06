interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = {
  key: 'age',
  value: 30,
};

const pair2: KeyValuePair<number, string> = {
  key: 1,
  value: 'One',
};

export {};
