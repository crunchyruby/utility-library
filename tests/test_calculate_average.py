import unittest
from math_utils.calculate_average import calculate_average

class TestCalculateAverage(unittest.TestCase):
    def test_calculate_average(self):
        # Add your test cases here
        self.assertIsNotNone(calculate_average([1, 2, 3]))

if __name__ == '__main__':
    unittest.main()