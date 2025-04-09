def calculate_average(numbers):
    """
    Calculates the average of a list of numbers
    
    Args:
        numbers (list): List of numbers
        
    Returns:
        float: The average value
    """
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)