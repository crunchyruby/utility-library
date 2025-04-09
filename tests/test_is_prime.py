import unittest
from math_utils.is_prime import is_prime

class TestIsPrime(unittest.TestCase):
    def test_is_prime(self):
        # Add your test cases here
        self.assertIsNotNone(is_prime([1, 2, 3]))

if __name__ == '__main__':
    unittest.main()