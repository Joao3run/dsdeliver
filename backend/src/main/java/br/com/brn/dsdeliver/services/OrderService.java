package br.com.brn.dsdeliver.services;

import br.com.brn.dsdeliver.dto.OrderDTO;
import br.com.brn.dsdeliver.entities.Order;
import br.com.brn.dsdeliver.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    /*
     * @author BRUN on 06/01/2021
     */

    @Autowired
    private OrderRepository repository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(ord -> new OrderDTO(ord)).collect(Collectors.toList());
    }
}
